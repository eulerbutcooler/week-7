import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom } from "./store/atoms/count";
import { useMemo } from "react";
import { evenSelector } from "./store/atoms/count";



function App(){

  return (
    <div>
      <RecoilRoot>
      <Count/>
      </RecoilRoot>
    </div>
  )
}

function Count(){
  console.log("re-rendered")
  return <div>
    <CountRenderer/>
    <Buttons/>
  </div>
}

function CountRenderer(){
  let count = useRecoilValue(countAtom);
  return <div>
    <b>
      {count}
    </b>
    <EvenCountRenderer/>
  </div>
}

function EvenCountRenderer(){
  const isEven = useRecoilValue(evenSelector);
  return <div>
    {isEven ? "It is even" : null}
  </div>
}

function Buttons ({}){
  console.log("asjhfas")
  const setCount = useSetRecoilState(countAtom);
  return <div>
    <button onClick={()=>{
      setCount((count)=>count+1)
    }}>Increase</button>

    <button onClick={()=>{
      setCount((count)=>count-1)
    }}>Decrease</button>
  </div>
}

export default App