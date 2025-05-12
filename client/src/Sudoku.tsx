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

function Cell(initial: CellContent, setCell: (value: CellContent) => void) {
  const [content, setContent] = useState(initial);
  const onChange = (value: string) => {
    console.log(value);
    if (isValidCellContent(value)) {
      setContent(value);
      setCell(value);
    }
  }
  const elem = (
    <>
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
    </>
  )
  return elem
}

function Sudoku() {
  const sudoku = getSudoku("easy");
  const puzzle = Array.from(sudoku.puzzle) as Array<CellContent | "-">;

  const [solution] = useState(Array.from(sudoku.solution) as Array<CorrectCellContent>);
  const [cells, setCells] = useState(puzzle.map((value) => (value == "-") ? "" : value));
  const setCell = (idx: number) => { return (value: CellContent) => setCells(current => { current[idx] = value; return current; }) }
  const GAP = 2;

  return (
    <>
      <div className='d-flex'>
        <Stack gap={GAP}>
          <Stack gap={GAP} direction="horizontal">
            <Stack gap={GAP}>
              <Stack gap={GAP} direction="horizontal">{Cell(cells[0], setCell(0))}{Cell(cells[1], setCell(1))}{Cell(cells[2], setCell(2))}</Stack>
              <Stack gap={GAP} direction="horizontal">{Cell(cells[9], setCell(9))}{Cell(cells[10], setCell(10))}{Cell(cells[11], setCell(11))}</Stack>
              <Stack gap={GAP} direction="horizontal">{Cell(cells[18], setCell(18))}{Cell(cells[19], setCell(19))}{Cell(cells[20], setCell(20))}</Stack>
            </Stack>
            <div className="vr" />
            <Stack gap={GAP}>
              <Stack gap={GAP} direction="horizontal">{Cell(cells[3], setCell(3))}{Cell(cells[4], setCell(4))}{Cell(cells[5], setCell(5))}</Stack>
              <Stack gap={GAP} direction="horizontal">{Cell(cells[12], setCell(12))}{Cell(cells[13], setCell(13))}{Cell(cells[14], setCell(14))}</Stack>
              <Stack gap={GAP} direction="horizontal">{Cell(cells[21], setCell(21))}{Cell(cells[22], setCell(22))}{Cell(cells[23], setCell(23))}</Stack>
            </Stack>
            <div className="vr" />
            <Stack gap={GAP}>
              <Stack gap={GAP} direction="horizontal">{Cell(cells[6], setCell(6))}{Cell(cells[7], setCell(7))}{Cell(cells[8], setCell(8))}</Stack>
              <Stack gap={GAP} direction="horizontal">{Cell(cells[15], setCell(15))}{Cell(cells[16], setCell(16))}{Cell(cells[17], setCell(17))}</Stack>
              <Stack gap={GAP} direction="horizontal">{Cell(cells[24], setCell(24))}{Cell(cells[25], setCell(25))}{Cell(cells[26], setCell(26))}</Stack>
            </Stack>
          </Stack>
          <hr className='m-1' />
          <Stack gap={GAP} direction="horizontal">
            <Stack gap={GAP}>
              <Stack gap={GAP} direction="horizontal">{Cell(cells[27], setCell(27))}{Cell(cells[28], setCell(28))}{Cell(cells[29], setCell(29))}</Stack>
              <Stack gap={GAP} direction="horizontal">{Cell(cells[36], setCell(36))}{Cell(cells[37], setCell(37))}{Cell(cells[38], setCell(38))}</Stack>
              <Stack gap={GAP} direction="horizontal">{Cell(cells[45], setCell(45))}{Cell(cells[46], setCell(46))}{Cell(cells[47], setCell(47))}</Stack>
            </Stack>
            <div className="vr" />
            <Stack gap={GAP}>
              <Stack gap={GAP} direction="horizontal">{Cell(cells[30], setCell(30))}{Cell(cells[31], setCell(31))}{Cell(cells[32], setCell(32))}</Stack>
              <Stack gap={GAP} direction="horizontal">{Cell(cells[39], setCell(39))}{Cell(cells[40], setCell(40))}{Cell(cells[41], setCell(41))}</Stack>
              <Stack gap={GAP} direction="horizontal">{Cell(cells[48], setCell(48))}{Cell(cells[49], setCell(49))}{Cell(cells[50], setCell(50))}</Stack>
            </Stack>
            <div className="vr" />
            <Stack gap={GAP}>
              <Stack gap={GAP} direction="horizontal">{Cell(cells[33], setCell(33))}{Cell(cells[34], setCell(34))}{Cell(cells[35], setCell(35))}</Stack>
              <Stack gap={GAP} direction="horizontal">{Cell(cells[42], setCell(42))}{Cell(cells[43], setCell(43))}{Cell(cells[44], setCell(44))}</Stack>
              <Stack gap={GAP} direction="horizontal">{Cell(cells[51], setCell(51))}{Cell(cells[52], setCell(52))}{Cell(cells[53], setCell(53))}</Stack>
            </Stack>
          </Stack>
          <hr className='m-1' />
          <Stack gap={GAP} direction="horizontal">
            <Stack gap={GAP}>
              <Stack gap={GAP} direction="horizontal">{Cell(cells[54], setCell(54))}{Cell(cells[55], setCell(55))}{Cell(cells[56], setCell(56))}</Stack>
              <Stack gap={GAP} direction="horizontal">{Cell(cells[63], setCell(63))}{Cell(cells[64], setCell(64))}{Cell(cells[65], setCell(65))}</Stack>
              <Stack gap={GAP} direction="horizontal">{Cell(cells[72], setCell(72))}{Cell(cells[73], setCell(73))}{Cell(cells[74], setCell(74))}</Stack>
            </Stack>
            <div className="vr" />
            <Stack gap={GAP}>
              <Stack gap={GAP} direction="horizontal">{Cell(cells[57], setCell(57))}{Cell(cells[58], setCell(58))}{Cell(cells[59], setCell(59))}</Stack>
              <Stack gap={GAP} direction="horizontal">{Cell(cells[66], setCell(66))}{Cell(cells[67], setCell(67))}{Cell(cells[68], setCell(68))}</Stack>
              <Stack gap={GAP} direction="horizontal">{Cell(cells[75], setCell(75))}{Cell(cells[76], setCell(76))}{Cell(cells[77], setCell(77))}</Stack>
            </Stack>
            <div className="vr" />
            <Stack gap={GAP}>
              <Stack gap={GAP} direction="horizontal">{Cell(cells[60], setCell(60))}{Cell(cells[61], setCell(61))}{Cell(cells[62], setCell(62))}</Stack>
              <Stack gap={GAP} direction="horizontal">{Cell(cells[69], setCell(69))}{Cell(cells[70], setCell(70))}{Cell(cells[71], setCell(71))}</Stack>
              <Stack gap={GAP} direction="horizontal">{Cell(cells[78], setCell(78))}{Cell(cells[79], setCell(79))}{Cell(cells[80], setCell(80))}</Stack>
            </Stack>
          </Stack>
        </Stack>
      </div>
    </>
  );
}

export default Sudoku