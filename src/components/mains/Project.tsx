import { useEffect, useState } from "react";
import styled from "styled-components";

type Op = "add" | "sub" | "mul" | "div" | "pow";

const CalcMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #F3F2EC;  
  max-width: 100%;
  margin: 0 auto;
  padding: 10%;
`;

const Title = styled.h2`
  color: #E62727;
  text-align: center;  
  padding-bottom: 2%;  
  margin: 0 auto;  
`;

const Sub = styled.h4`
  margin: 0 auto;
  padding: 2%;  
  font-size: calc(3px + 2vw);
  color: black;
  text-align: center;
    
`;

const Input = styled.input`
  display: block;  
  width: 80%;
  padding: 1%;
  margin: 1% 0;
  border: 1px solid #ccc;
  font-size: calc(10px + 2vw);
  background: #fff;
`;

const Ops = styled.div`
  display: inline-block; 
  width: 100%;
  margin: 5% 0;
`;

const Btn = styled.button`
  padding: 4%;
  margin: 0 0.4% 0.8%;
  border: 3px solid gold;
  background: #000000;
  color: #ffffff;
  font-size: calc(10px + 2vw);
  transition: background 0.2s;

  &:hover {
    background: gold;
    color: #000;
  }
`;

const ClearBtn = styled(Btn)`
  border-color: deeppink;
  background: hotpink;

  &:hover {
    background: deeppink;
    color: #fff;
  }
`;

const Output = styled.h3`
  width: 100%;
  padding: 5%;
  margin-top: 1%;
  border: 1px solid #ccc;
  background: #ffffff;
  font-size: calc(10px + 2vw);
  text-align: center;  
`;

export default function Project() {
    const [a, setA] = useState<string>("");
    const [b, setB] = useState<string>("");
    const [op, setOp] = useState<Op | null>(null);

    const [result, setResult] = useState<string>("");
    const [color, setColor] = useState<"black" | "red">("black");

    const setAnswer = (value: number) => {
        const text = Number.isFinite(value) ? String(value) : "NaN";
        setResult(text);
        setColor(value < 0 ? "red" : "black");
    };

    useEffect(() => {
        if (!op) {
            setResult("");
            setColor("black");
            return;
        }

        const A = Number(a || "0");
        const B = Number(b || "0");

        switch (op) {
            case "add": setAnswer(A + B); break;
            case "sub": setAnswer(A - B); break;
            case "mul": setAnswer(A * B); break;
            case "div": setAnswer(B === 0 ? NaN : A / B); break;
            case "pow": setAnswer(A ** B); break;
        }
    }, [a, b, op]);

    const clear = () => {
        setA("");
        setB("");
        setResult("");
        setColor("black");
        setOp(null);
    };

    return (
        <CalcMain id="calc">
            <title>Project | Resume</title>

            <div id="user-input">
                <Title>Project</Title>
                <Sub className="pd">Calculator</Sub>

                <label htmlFor="inputOne" className="sr-only">First Number:</label>
                <Input
                    id="inputOne"
                    placeholder="First Number"
                    value={a}
                    inputMode="decimal"
                    onChange={(e) => setA(e.target.value)}
                />

                <label htmlFor="inputTwo" className="sr-only">Second Number:</label>
                <Input
                    id="inputTwo"
                    placeholder="Second Number"
                    value={b}
                    inputMode="decimal"
                    onChange={(e) => setB(e.target.value)}
                />
            </div>

            <Ops id="opp">
                <Btn onClick={() => setOp("add")}>+</Btn>
                <Btn onClick={() => setOp("sub")}>-</Btn>
                <Btn onClick={() => setOp("mul")}>*</Btn>
                <Btn onClick={() => setOp("div")}>/</Btn>
                <Btn onClick={() => setOp("pow")}>**</Btn>
                <ClearBtn onClick={clear} id="clear">Clear</ClearBtn>
            </Ops>

            <Output id="output" style={{ color }}>
                {result === "NaN" ? "Undefined" : result}
            </Output>
        </CalcMain>
    );
}
