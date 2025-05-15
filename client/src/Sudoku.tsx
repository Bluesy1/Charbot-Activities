import { getSudoku } from 'sudoku-gen';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import "./Sudoku.css";
type CorrectCellContent = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
type CellContent = CorrectCellContent | "";
type Nonuple<T> = [T, T, T, T, T, T, T, T, T];

function isValidCellContent(content: string): content is CellContent {
  return content.length === 0 || (content.length === 1 && "123456789".includes(content));
}

function Sudoku() {
  const sudoku = getSudoku("hard");
  const puzzle = Array.from(sudoku.puzzle) as Array<CellContent | "-">;

  const [solution, setSolution] = useState(Array.from(sudoku.solution) as Array<CorrectCellContent>);
  const [cells, setCells] = useState(puzzle.map((value) => (value === "-") ? "" : value));
  const [cellReadOnly, setCellReadOnly] = useState(puzzle.map(value => (value !== "-")));
  const [gameOver, setGameOver] = useState(false);
  const [hasWon, setHasWon] = useState(false);
  const [isValidating, setIsValidating] = useState(false);
  const GAP = 2;


  function Cell(index: number) {
    const onChange = (value: string) => {
      if (isValidCellContent(value)) {
        setCells(current => { let arr = [...current]; arr[index] = value; return arr; });
      }
      setIsValidating(false);
    }
    const isReadOnly = cellReadOnly[index];
    const elem = (
      <>
        <Form.Control maxLength={1}
          value={cells[index]}
          readOnly={gameOver || isReadOnly}
          onChange={e => (onChange(e.target.value))}
          isInvalid={!isReadOnly && isValidating && solution[index] !== cells[index]}
          style={{
            width: "2em", height: "2em", padding: "8px",
            fontWeight: isReadOnly ? "bold" : "normal",
            textAlign: "center"
          }}
        />
      </>
    )
    return elem
  }

  function Quadrant(indexes: Nonuple<number>) {
    return (
      <>
        <Stack gap={GAP}>
          <Stack gap={GAP} direction="horizontal">{Cell(indexes[0])}{Cell(indexes[1])}{Cell(indexes[2])}</Stack>
          <Stack gap={GAP} direction="horizontal">{Cell(indexes[3])}{Cell(indexes[4])}{Cell(indexes[5])}</Stack>
          <Stack gap={GAP} direction="horizontal">{Cell(indexes[6])}{Cell(indexes[7])}{Cell(indexes[8])}</Stack>
        </Stack>
      </>
    )
  }

  return (
    <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
      <h1>Sudoku</h1>
      {(hasWon) ? (<><h2>Congrats, you solved the Sudoku!</h2></>) : (<></>)}
      <div className='container m-2'>
        <Button variant="primary" size="sm" className="m-2" onClick={() => {
          if (gameOver) { return; }
          setIsValidating(true);
          if (cells.every((item, idx) => item === solution[idx])) {
            setGameOver(true);
            setHasWon(true);
          } else {
            setHasWon(false);
          }
        }}> Submit Answer</Button>
        <Button variant="danger" size="sm" className="m-2" onClick={() => {
          if (gameOver) { return; }
          setCells(solution);
          setGameOver(true);
          setIsValidating(false);
          setHasWon(false);
        }}> Reveal Answer</Button >
        <Button variant="warning" size="sm" className="m-2" onClick={() => {
          const newSudoku = getSudoku("hard");
          const newPuzzle = Array.from(sudoku.puzzle) as Array<CellContent | "-">;
          setSolution(Array.from(newSudoku.solution) as Array<CorrectCellContent>);
          setCells(newPuzzle.map((value) => (value === "-") ? "" : value));
          setCellReadOnly(newPuzzle.map(value => (value !== "-")))
          setGameOver(false);
          setIsValidating(false);
          setHasWon(false);
        }}> New Puzzle</Button >
      </div>
      <div className='d-flex'>
        <Stack gap={GAP}>
          <Stack gap={GAP} direction="horizontal">
            {Quadrant([0, 1, 2, 9, 10, 11, 18, 19, 20])}
            <div className="vr" />
            {Quadrant([3, 4, 5, 12, 13, 14, 21, 22, 23])}
            <div className="vr" />
            {Quadrant([6, 7, 8, 15, 16, 17, 24, 25, 26])}
          </Stack>
          <hr className='m-1' />
          <Stack gap={GAP} direction="horizontal">
            {Quadrant([27, 28, 29, 36, 37, 38, 45, 46, 47])}
            <div className="vr" />
            {Quadrant([30, 31, 32, 39, 40, 41, 48, 49, 50])}
            <div className="vr" />
            {Quadrant([33, 34, 35, 42, 43, 44, 51, 52, 53])}
          </Stack>
          <hr className='m-1' />
          <Stack gap={GAP} direction="horizontal">
            {Quadrant([54, 55, 56, 63, 64, 65, 72, 73, 74])}
            <div className="vr" />
            {Quadrant([57, 58, 59, 66, 67, 68, 75, 76, 77])}
            <div className="vr" />
            {Quadrant([60, 61, 62, 69, 70, 71, 78, 79, 80])}
          </Stack>
        </Stack>
      </div>
    </div>
  );
}

export default Sudoku