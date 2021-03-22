import './App.css';
import React, {useState} from "react";

function App() {
  const [typedInfo, setTypedInfo] = useState([{}]);
  const [resourceList, setResourceList] = useState([{sourceResourceId:""}]);
  const [resultText, setResultText] = useState("");

  const onInfoChange = (e) => {
    const {name, value} = e.target;
    const list = [...typedInfo];
    list[0][name] = value;
    setTypedInfo(list);
  };

  const onResourceIdChange = (e, index) => {
    const {name, value} = e.target;
    const list = [...resourceList];
    list[index][name] = value;
    setResourceList(list);
  };

  const addClicked = () => {
    setResourceList([...resourceList,{sourceResourceId:""}]);
  };

  const removeClicked = index => {
    const list = [...resourceList];
    list.splice(index, 1);
    setResourceList(list);
  };

  const summitClicked = () => {
    const concatInfo = [...typedInfo];
    concatInfo[1] = [...resourceList];

    setResultText(concatInfo);
    //setResultText(resultText);
  };

  return (
    <div className="App">
      <div className="App-header" style={{minWidth:"1000px"}}>
        <h1>Validating Azure Resource Move
          <h2>between Subscripsions</h2>
        </h1>
      </div>
      <div
        style={{width:"100%",minWidth:"1000px",display:"inline-block"}}>
        <div class="full-container"
          style={{float:"left",width:"60%",minWidth:"600px"}}>
          <label>Source Subscription ID</label>
          <input
            name="sourceSubscriptionId"
            placeholder="abcde123-1234-5678-abcd-abcd12345678"
            size="40"
            onChange={e => onInfoChange(e)}
          />
          <label>Source Resource Group Name</label>
          <input
            name="sourceResourceGroupName"
            placeholder="rg-resouremove-prod-001"
            size="40"
            onChange={e => onInfoChange(e)}
          />
          <label>Client ID</label>
          <input
            name="clientID"
            placeholder="abcde123-1234-abcd-1234-abcde12345ab"
            size="40"
            onChange={e => onInfoChange(e)}
          />
          <label>Client Secret</label>
          <input
            name="clientSecret"
            placeholder="~ABCDE12345abcde!@#$%_)(*^123.1.12"
            size="40"
            onChange={e => onInfoChange(e)}
          />
          <label>Source Resource ID</label>
          {resourceList.map((x, i) => {
            return(
              <div>
                <input
                  name="sourceResourceId"
                  placeholder="~ABCDE12345abcde!@#$%_)(*^123.1.12"
                  onChange={e=>onResourceIdChange(e,i)}
                  size="40"
                />
                {resourceList.length !== 1 &&
                  <button
                    style={{marginLeft:"10px"}} onClick={() => removeClicked(i)}>
                    Remove
                  </button>
                }
                {resourceList.length - 1 === i &&
                  <button 
                    style={{marginLeft:"10px"}} onClick={addClicked}>
                    Add
                  </button>
                }
              </div>
            );
          })}
          <button name="summit" onClick={summitClicked} style={{marginTop:"30px"}}>Summit</button>
          <div style={{ marginTop: 20 }}>{JSON.stringify(resourceList)}</div>
        </div>

        <div class="full-container"
          style={{float:"right",width:"40%",minWidth:"400px",paddingRight:50}}>
          <label>Results</label>
          <div
            style={{textAlign:"left",border:"1px solid black",wordWrap:"break-word",paddingLeft:15,paddingRight:15}}>
            <label name="resultArea" style={{height:"500px"}}>{JSON.stringify(resultText)}</label>
          </div>
          <div style={{ marginTop: 20,wordWrap:"break-word" }}>{JSON.stringify(typedInfo)}</div>
        </div>
      </div>
    </div>
  )
}

export default App;