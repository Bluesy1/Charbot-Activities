import { getSudoku } from 'sudoku-gen';
import { useState } from 'react';
import "./Sudoku.css";
type CorrectCellContent = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
type CellContent = CorrectCellContent | "";


function isValidCellContent(content: string): content is CellContent {
  const validChars = "123456789";
  return content.length === 0 || (content.length === 1 && validChars.includes(content));
}


function Cell(initial: CellContent, key: number) {
  const [content, setContent] = useState(initial);
  const onChange = (value: string) => {
    if (isValidCellContent(value)) {
      setContent(value);
    }
  }
  const elem = (
    <td key={key}>
      <input type="text" maxLength={1} value={content} disabled={initial !== ""}
        onChange={e => (onChange(e.target.value))}
        style={{
          maxWidth: "10px", fontWeight: (initial !== "") ? "bold" : "normal",
          opacity: 1, backgroundColor: "rgb(59, 59, 59)", color: "#fff"
        }}
      />
    </td>
  )
  return elem
}

function Sudoku() {
  const sudoku = getSudoku("easy");
  const puzzle = Array.from(sudoku.puzzle) as Array<CellContent | "-">;
  const solution = Array.from(sudoku.solution) as Array<CorrectCellContent>;

  const [cells] = useState(puzzle.map((value, index) => { return { content: (value == "-") ? "" : value, correct: solution[index], key: index } }));

  const board_ = new Array<Array<{ content: CellContent; correct: CorrectCellContent; key: number; }>>();

  for (let index = 0; index < 9; index++) {
    const row_start = index * 9;
    board_.push(cells.slice(row_start, row_start + 9));
  }

  const [board] = useState(board_);

  return (
    <div>
      <table>
        <tbody>
          {board.map((row, idx) =>
            <tr key={idx}>
              {row.map(cell => Cell(cell.content, cell.key))}
            </tr>)}
        </tbody>
      </table>
    </div>
  );
}

export default Sudoku