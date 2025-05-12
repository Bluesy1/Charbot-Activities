import { getSudoku } from 'sudoku-gen';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Sudoku.css";
type CorrectCellContent = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
type CellContent = CorrectCellContent | "";


function isValidCellContent(content: string): content is CellContent {
  const validChars = "123456789";
  return content.length === 0 || (content.length === 1 && validChars.includes(content));
}

function Cell(initial: CellContent) {
  const [content, setContent] = useState(initial);
  const onChange = (value: string) => {
    if (isValidCellContent(value)) {
      setContent(value);
    }
  }
  const elem = (
    <div>
      <Form.Control maxLength={1} value={content} readOnly={initial !== ""}
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
  const [cells] = useState(puzzle.map((value) => Cell((value == "-") ? "" : value)));

  const GAP = 2;

  return (
    <>
      <div className='d-flex'>
        <Stack gap={GAP}>
          <Stack gap={GAP} direction="horizontal">
            <Stack gap={GAP}>
              <Stack gap={GAP} direction="horizontal">{cells[0]}{cells[1]}{cells[2]}</Stack>
              <Stack gap={GAP} direction="horizontal">{cells[9]}{cells[10]}{cells[11]}</Stack>
              <Stack gap={GAP} direction="horizontal">{cells[18]}{cells[19]}{cells[20]}</Stack>
            </Stack>
            <div className="vr" />
            <Stack gap={GAP}>
              <Stack gap={GAP} direction="horizontal">{cells[3]}{cells[4]}{cells[5]}</Stack>
              <Stack gap={GAP} direction="horizontal">{cells[12]}{cells[13]}{cells[14]}</Stack>
              <Stack gap={GAP} direction="horizontal">{cells[21]}{cells[22]}{cells[23]}</Stack>
            </Stack>
            <div className="vr" />
            <Stack gap={GAP}>
              <Stack gap={GAP} direction="horizontal">{cells[6]}{cells[7]}{cells[8]}</Stack>
              <Stack gap={GAP} direction="horizontal">{cells[15]}{cells[16]}{cells[17]}</Stack>
              <Stack gap={GAP} direction="horizontal">{cells[24]}{cells[25]}{cells[26]}</Stack>
            </Stack>
          </Stack>
          <hr className='m-1' />
          <Stack gap={GAP} direction="horizontal">
            <Stack gap={GAP}>
              <Stack gap={GAP} direction="horizontal">{cells[27]}{cells[28]}{cells[29]}</Stack>
              <Stack gap={GAP} direction="horizontal">{cells[36]}{cells[37]}{cells[38]}</Stack>
              <Stack gap={GAP} direction="horizontal">{cells[45]}{cells[46]}{cells[47]}</Stack>
            </Stack>
            <div className="vr" />
            <Stack gap={GAP}>
              <Stack gap={GAP} direction="horizontal">{cells[30]}{cells[31]}{cells[32]}</Stack>
              <Stack gap={GAP} direction="horizontal">{cells[39]}{cells[40]}{cells[41]}</Stack>
              <Stack gap={GAP} direction="horizontal">{cells[48]}{cells[49]}{cells[50]}</Stack>
            </Stack>
            <div className="vr" />
            <Stack gap={GAP}>
              <Stack gap={GAP} direction="horizontal">{cells[33]}{cells[34]}{cells[35]}</Stack>
              <Stack gap={GAP} direction="horizontal">{cells[42]}{cells[43]}{cells[44]}</Stack>
              <Stack gap={GAP} direction="horizontal">{cells[51]}{cells[52]}{cells[53]}</Stack>
            </Stack>
          </Stack>
          <hr className='m-1' />
          <Stack gap={GAP} direction="horizontal">
            <Stack gap={GAP}>
              <Stack gap={GAP} direction="horizontal">{cells[54]}{cells[55]}{cells[56]}</Stack>
              <Stack gap={GAP} direction="horizontal">{cells[63]}{cells[63]}{cells[65]}</Stack>
              <Stack gap={GAP} direction="horizontal">{cells[72]}{cells[73]}{cells[74]}</Stack>
            </Stack>
            <div className="vr" />
            <Stack gap={GAP}>
              <Stack gap={GAP} direction="horizontal">{cells[57]}{cells[58]}{cells[59]}</Stack>
              <Stack gap={GAP} direction="horizontal">{cells[66]}{cells[67]}{cells[68]}</Stack>
              <Stack gap={GAP} direction="horizontal">{cells[75]}{cells[76]}{cells[77]}</Stack>
            </Stack>
            <div className="vr" />
            <Stack gap={GAP}>
              <Stack gap={GAP} direction="horizontal">{cells[60]}{cells[61]}{cells[62]}</Stack>
              <Stack gap={GAP} direction="horizontal">{cells[69]}{cells[70]}{cells[71]}</Stack>
              <Stack gap={GAP} direction="horizontal">{cells[78]}{cells[79]}{cells[80]}</Stack>
            </Stack>
          </Stack>
        </Stack>
      </div>
    </>
  );
}

export default Sudoku