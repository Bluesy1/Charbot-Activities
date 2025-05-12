import { getSudoku } from 'sudoku-gen';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import "./Sudoku.css";
type CorrectCellContent = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
type CellContent = CorrectCellContent | "";


function isValidCellContent(content: string): content is CellContent {
  return content.length === 0 || (content.length === 1 && "123456789".includes(content));
}

function Cell(initial: CellContent) {
  const [content, setContent] = useState(initial);
  const onChange = (value: string) => {
    console.log(value);
    if (isValidCellContent(value)) {
      setContent(value);
    }
  }
  const elem = (
    <div>
      <Form.Control maxLength={1}
        defaultValue={content}
        value={content}
        readOnly={initial !== ""}
        onChange={e => (onChange(e.target.value))}
        style={{
          width: "2em", height: "2em", padding: "8px",
          fontWeight: (initial !== "") ? "bold" : "normal",
          textAlign: "center"
          // opacity: 1, backgroundColor: "rgb(59, 59, 59)", color: "#fff"
        }}
      />
    </div>
  )
  return elem
}

function Sudoku() {
  const sudoku = getSudoku("easy");
  const puzzle = Array.from(sudoku.puzzle) as Array<CellContent | "-">;

  const [solution] = useState(Array.from(sudoku.solution) as Array<CorrectCellContent>);
  const [cells] = useState(puzzle.map((value) => (value == "-") ? "" : value));

  const GAP = 2;

  return (
    <>
      <div className='d-flex'>
        <Stack gap={GAP}>
          <Stack gap={GAP} direction="horizontal">
            <Stack gap={GAP}>
              <Stack gap={GAP} direction="horizontal">{Cell(cells[0])}{Cell(cells[1])}{Cell(cells[2])}</Stack>
              <Stack gap={GAP} direction="horizontal">{Cell(cells[9])}{Cell(cells[10])}{Cell(cells[11])}</Stack>
              <Stack gap={GAP} direction="horizontal">{Cell(cells[18])}{Cell(cells[19])}{Cell(cells[20])}</Stack>
            </Stack>
            <div className="vr" />
            <Stack gap={GAP}>
              <Stack gap={GAP} direction="horizontal">{Cell(cells[3])}{Cell(cells[4])}{Cell(cells[5])}</Stack>
              <Stack gap={GAP} direction="horizontal">{Cell(cells[12])}{Cell(cells[13])}{Cell(cells[14])}</Stack>
              <Stack gap={GAP} direction="horizontal">{Cell(cells[21])}{Cell(cells[22])}{Cell(cells[23])}</Stack>
            </Stack>
            <div className="vr" />
            <Stack gap={GAP}>
              <Stack gap={GAP} direction="horizontal">{Cell(cells[6])}{Cell(cells[7])}{Cell(cells[8])}</Stack>
              <Stack gap={GAP} direction="horizontal">{Cell(cells[15])}{Cell(cells[16])}{Cell(cells[17])}</Stack>
              <Stack gap={GAP} direction="horizontal">{Cell(cells[24])}{Cell(cells[25])}{Cell(cells[26])}</Stack>
            </Stack>
          </Stack>
          <hr className='m-1' />
          <Stack gap={GAP} direction="horizontal">
            <Stack gap={GAP}>
              <Stack gap={GAP} direction="horizontal">{Cell(cells[27])}{Cell(cells[28])}{Cell(cells[29])}</Stack>
              <Stack gap={GAP} direction="horizontal">{Cell(cells[36])}{Cell(cells[37])}{Cell(cells[38])}</Stack>
              <Stack gap={GAP} direction="horizontal">{Cell(cells[45])}{Cell(cells[46])}{Cell(cells[47])}</Stack>
            </Stack>
            <div className="vr" />
            <Stack gap={GAP}>
              <Stack gap={GAP} direction="horizontal">{Cell(cells[30])}{Cell(cells[31])}{Cell(cells[32])}</Stack>
              <Stack gap={GAP} direction="horizontal">{Cell(cells[39])}{Cell(cells[40])}{Cell(cells[41])}</Stack>
              <Stack gap={GAP} direction="horizontal">{Cell(cells[48])}{Cell(cells[49])}{Cell(cells[50])}</Stack>
            </Stack>
            <div className="vr" />
            <Stack gap={GAP}>
              <Stack gap={GAP} direction="horizontal">{Cell(cells[33])}{Cell(cells[34])}{Cell(cells[35])}</Stack>
              <Stack gap={GAP} direction="horizontal">{Cell(cells[42])}{Cell(cells[43])}{Cell(cells[44])}</Stack>
              <Stack gap={GAP} direction="horizontal">{Cell(cells[51])}{Cell(cells[52])}{Cell(cells[53])}</Stack>
            </Stack>
          </Stack>
          <hr className='m-1' />
          <Stack gap={GAP} direction="horizontal">
            <Stack gap={GAP}>
              <Stack gap={GAP} direction="horizontal">{Cell(cells[54])}{Cell(cells[55])}{Cell(cells[56])}</Stack>
              <Stack gap={GAP} direction="horizontal">{Cell(cells[63])}{Cell(cells[64])}{Cell(cells[65])}</Stack>
              <Stack gap={GAP} direction="horizontal">{Cell(cells[72])}{Cell(cells[73])}{Cell(cells[74])}</Stack>
            </Stack>
            <div className="vr" />
            <Stack gap={GAP}>
              <Stack gap={GAP} direction="horizontal">{Cell(cells[57])}{Cell(cells[58])}{Cell(cells[59])}</Stack>
              <Stack gap={GAP} direction="horizontal">{Cell(cells[66])}{Cell(cells[67])}{Cell(cells[68])}</Stack>
              <Stack gap={GAP} direction="horizontal">{Cell(cells[75])}{Cell(cells[76])}{Cell(cells[77])}</Stack>
            </Stack>
            <div className="vr" />
            <Stack gap={GAP}>
              <Stack gap={GAP} direction="horizontal">{Cell(cells[60])}{Cell(cells[61])}{Cell(cells[62])}</Stack>
              <Stack gap={GAP} direction="horizontal">{Cell(cells[69])}{Cell(cells[70])}{Cell(cells[71])}</Stack>
              <Stack gap={GAP} direction="horizontal">{Cell(cells[78])}{Cell(cells[79])}{Cell(cells[80])}</Stack>
            </Stack>
          </Stack>
        </Stack>
      </div>
    </>
  );
}

export default Sudoku