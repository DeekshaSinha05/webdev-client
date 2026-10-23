export default function VariableTypes() {
  let numberVariable = 123;
  let floatingPointNumber = 234.345;
  let stringVariable = "Hello World!";
  let booleanVariable = true;
  let isNumber = typeof numberVariable;
  let isString = typeof stringVariable;
  let isBoolean = typeof booleanVariable;
  let personalNumber = 2026;
  let personalString = "Web Development";
  let personalNumberType = typeof personalNumber;
  let personalStringType = typeof personalString;
  let sampleCount = 42;
  let sampleLabel = "Lab 3";
  let sampleCountType = typeof sampleCount;
  let sampleLabelType = typeof sampleLabel;
  return (
    <div id="wd-variable-types">
      <h4>Variables Types</h4>
      numberVariable = {numberVariable}
      <br />
      floatingPointNumber = {floatingPointNumber}
      <br />
      stringVariable = {stringVariable}
      <br />
      booleanVariable = {booleanVariable + ""}
      <br />
      isNumber = {isNumber}
      <br />
      isString = {isString}
      <br />
      isBoolean = {isBoolean}
      <br />
      personalNumber = {personalNumber}<br />
      personalNumberType = {personalNumberType}<br />
      personalString = {personalString}<br />
      personalStringType = {personalStringType}<br />
      sampleCount = {sampleCount}<br />
      sampleCountType = {sampleCountType}<br />
      sampleLabel = {sampleLabel}<br />
      sampleLabelType = {sampleLabelType}<br />
      <hr />
    </div>
  );
}