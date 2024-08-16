import React, { useEffect, useState } from "react";
import {
  useDeclarationPerson,
  useDeclarations,
} from "../services/hooks/declarations";
import { DECLARATION } from "../constants/FourthStep";

function TryScreen() {
  const { data: DeclarationPerson } = useDeclarationPerson(
    () => {},
    () => {}
  );
  const { data: Declaration } = useDeclarations(
    () => {},
    () => {}
  );
  const [declaration,setDeclarationList] = useState(DECLARATION);
  useEffect(() => {
   if(DeclarationPerson){
    const updatedList = DeclarationPerson&& DeclarationPerson.map((item) => ({
      id: item.declaration_Id,
      question: item.declaration_question,
      answer: item.answer,
    }));
    
    setDeclarationList(updatedList?updatedList:[]);
    console.log(updatedList);
   }
  }, [DeclarationPerson]);
  
  return (
    <div>
      <h2>Declaration</h2>
      {Declaration &&
        Declaration.map((item, index) => (
          <div key={index}>
            <p>{`${item.declaration_Id} - ${item.declaration_Question}`}</p>
          </div>
        ))}
      <h2 className="mt-96">Declaration Person</h2>
     {DeclarationPerson &&DeclarationPerson.map((item, index) => 
    <div key={index}>
      <p>{`Name: ${item.firstname} ${item.lastname} ---> Question:  ${item.declaration_question} ---> Answer: ${item.answer} ---> Description: ${item.description}`}</p>
      </div>
    )}
    </div>
  );
}

export default TryScreen;
