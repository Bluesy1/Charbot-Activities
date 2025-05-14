import { getSudoku } from 'sudoku-gen';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import "./Sudoku.css";
type CorrectCellContent = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
type CellContent = CorrectCellContent | "";

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
  const GAP = 2;


  function Cell(index: number) {
    const onChange = (value: string) => {
      if (isValidCellContent(value)) {
        setCells(current => { let arr = [...current]; arr[index] = value; return arr; })
      }
    }
    const isReadOnly = cellReadOnly[index];
    const elem = (
      <>
        <Form.Control maxLength={1}
          value={cells[index]}
          readOnly={gameOver || isReadOnly}
          onChange={e => (onChange(e.target.value))}
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

  return (
    <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
      <h1>Sudoku</h1>
      <div className='container m-2'>
        <Button variant="primary" size="sm" className="m-2"> Submit Answer</Button>
        <Button variant="danger" size="sm" className="m-2" onClick={() => { setCells(solution); setGameOver(true); }}> Reveal Answer</Button >
        <Button variant="warning" size="sm" className="m-2" onClick={() => {
          const newSudoku = getSudoku("hard");
          const newPuzzle = Array.from(sudoku.puzzle) as Array<CellContent | "-">;
          setSolution(Array.from(newSudoku.solution) as Array<CorrectCellContent>);
          setCells(newPuzzle.map((value) => (value === "-") ? "" : value));
          setCellReadOnly(newPuzzle.map(value => (value !== "-")))
          setGameOver(false);
        }}> New Puzzle</Button >
      </div>
      <div className='d-flex'>
        <Stack gap={GAP}>
          <Stack gap={GAP} direction="horizontal">
            <Stack gap={GAP}>
              <Stack gap={GAP} direction="horizontal">{Cell(0)}{Cell(1)}{Cell(2)}</Stack>
              <Stack gap={GAP} direction="horizontal">{Cell(9)}{Cell(10)}{Cell(11)}</Stack>
              <Stack gap={GAP} direction="horizontal">{Cell(18)}{Cell(19)}{Cell(20)}</Stack>
            </Stack>
            <div className="vr" />
            <Stack gap={GAP}>
              <Stack gap={GAP} direction="horizontal">{Cell(3)}{Cell(4)}{Cell(5)}</Stack>
              <Stack gap={GAP} direction="horizontal">{Cell(12)}{Cell(13)}{Cell(14)}</Stack>
              <Stack gap={GAP} direction="horizontal">{Cell(21)}{Cell(22)}{Cell(23)}</Stack>
            </Stack>
            <div className="vr" />
            <Stack gap={GAP}>
              <Stack gap={GAP} direction="horizontal">{Cell(6)}{Cell(7)}{Cell(8)}</Stack>
              <Stack gap={GAP} direction="horizontal">{Cell(15)}{Cell(16)}{Cell(17)}</Stack>
              <Stack gap={GAP} direction="horizontal">{Cell(24)}{Cell(25)}{Cell(26)}</Stack>
            </Stack>
          </Stack>
          <hr className='m-1' />
          <Stack gap={GAP} direction="horizontal">
            <Stack gap={GAP}>
              <Stack gap={GAP} direction="horizontal">{Cell(27)}{Cell(28)}{Cell(29)}</Stack>
              <Stack gap={GAP} direction="horizontal">{Cell(36)}{Cell(37)}{Cell(38)}</Stack>
              <Stack gap={GAP} direction="horizontal">{Cell(45)}{Cell(46)}{Cell(47)}</Stack>
            </Stack>
            <div className="vr" />
            <Stack gap={GAP}>
              <Stack gap={GAP} direction="horizontal">{Cell(30)}{Cell(31)}{Cell(32)}</Stack>
              <Stack gap={GAP} direction="horizontal">{Cell(39)}{Cell(40)}{Cell(41)}</Stack>
              <Stack gap={GAP} direction="horizontal">{Cell(48)}{Cell(49)}{Cell(50)}</Stack>
            </Stack>
            <div className="vr" />
            <Stack gap={GAP}>
              <Stack gap={GAP} direction="horizontal">{Cell(33)}{Cell(34)}{Cell(35)}</Stack>
              <Stack gap={GAP} direction="horizontal">{Cell(42)}{Cell(43)}{Cell(44)}</Stack>
              <Stack gap={GAP} direction="horizontal">{Cell(51)}{Cell(52)}{Cell(53)}</Stack>
            </Stack>
          </Stack>
          <hr className='m-1' />
          <Stack gap={GAP} direction="horizontal">
            <Stack gap={GAP}>
              <Stack gap={GAP} direction="horizontal">{Cell(54)}{Cell(55)}{Cell(56)}</Stack>
              <Stack gap={GAP} direction="horizontal">{Cell(63)}{Cell(64)}{Cell(65)}</Stack>
              <Stack gap={GAP} direction="horizontal">{Cell(72)}{Cell(73)}{Cell(74)}</Stack>
            </Stack>
            <div className="vr" />
            <Stack gap={GAP}>
              <Stack gap={GAP} direction="horizontal">{Cell(57)}{Cell(58)}{Cell(59)}</Stack>
              <Stack gap={GAP} direction="horizontal">{Cell(66)}{Cell(67)}{Cell(68)}</Stack>
              <Stack gap={GAP} direction="horizontal">{Cell(75)}{Cell(76)}{Cell(77)}</Stack>
            </Stack>
            <div className="vr" />
            <Stack gap={GAP}>
              <Stack gap={GAP} direction="horizontal">{Cell(60)}{Cell(61)}{Cell(62)}</Stack>
              <Stack gap={GAP} direction="horizontal">{Cell(69)}{Cell(70)}{Cell(71)}</Stack>
              <Stack gap={GAP} direction="horizontal">{Cell(78)}{Cell(79)}{Cell(80)}</Stack>
            </Stack>
          </Stack>
        </Stack>
      </div>
    </div>
  );
}

export default Sudoku