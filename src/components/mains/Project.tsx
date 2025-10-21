import { useEffect, useState } from "react";
import styled from "styled-components";


const CalcMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f3f2ec;
  max-width: 100%;
  margin: 0 auto;
  padding: 10%;
`;

const Title = styled.h2`
  color: #e62727;
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

type Op = "add" | "sub" | "mul" | "div" | "pow";


function toNum(v: string): number {
    return Number(v || "0");
}


function useAdd(a: string, b: string) {
    const [ans, setAns] = useState<number>(0);
    useEffect(() => {
        setAns(toNum(a) + toNum(b));
    }, [a, b]);
    return ans;
}


function useSub(a: string, b: string) {
    const [ans, setAns] = useState<number>(0);
    useEffect(() => {
        setAns(toNum(a) - toNum(b));
    }, [a, b]);
    return ans;
}


function useMul(a: string, b: string) {
    const [ans, setAns] = useState<number>(0);
    useEffect(() => {
        setAns(toNum(a) * toNum(b));
    }, [a, b]);
    return ans;
}


function useDiv(a: string, b: string) {
    const [ans, setAns] = useState<number>(0);
    useEffect(() => {
        const A = toNum(a);
        const B = toNum(b);
        setAns(B === 0 ? NaN : A / B);
    }, [a, b]);
    return ans;
}


function usePow(a: string, b: string) {
    const [ans, setAns] = useState<number>(0);
    useEffect(() => {
        setAns(toNum(a) ** toNum(b));
    }, [a, b]);
    return ans;
}

function useOutputColor(value: number | null) {
    const [text, setText] = useState<string>("");
    const [color, setColor] = useState<"black" | "red">("black");

    useEffect(() => {
        if (value === null) {
            setText("");
            setColor("black");
            return;
        }
        if (!Number.isFinite(value)) {
            setText("Undefined");
            setColor("black");
            return;
        }
        setText(String(value));
        setColor(value < 0 ? "red" : "black");
    }, [value]);

    return { text, color };
}


export default function Project() {
    const [a, setA] = useState<string>("");
    const [b, setB] = useState<string>("");
    const [op, setOp] = useState<Op | null>(null);

    const add = useAdd(a, b);
    const sub = useSub(a, b);
    const mul = useMul(a, b);
    const div = useDiv(a, b);
    const pow = usePow(a, b);

    let currentValue: number | null = null;
    switch (op) {
        case "add": currentValue = add; break;
        case "sub": currentValue = sub; break;
        case "mul": currentValue = mul; break;
        case "div": currentValue = div; break;
        case "pow": currentValue = pow; break;
        default: currentValue = null;
    }


    const { text, color } = useOutputColor(currentValue);

    const clear = () => {
        setA("");
        setB("");
        setOp(null);
    };

    return (
        <CalcMain id="calc">
            <title>Project | Resume</title>

            <div id="user-input">
                <Title>Project</Title>
                <Sub className="pd">Calculator</Sub>

                <label htmlFor="inputOne">First Number:</label>
                <Input
                    id="inputOne"
                    placeholder="First Number"
                    value={a}
                    inputMode="decimal"
                    onChange={(e) => setA(e.target.value)}
                />

                <label htmlFor="inputTwo">Second Number:</label>
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
                {text}
            </Output>
        </CalcMain>
    );
}
