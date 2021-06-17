import React, { useCallback, useEffect, useState } from 'react'
import Diagram, { createSchema, useSchema } from 'beautiful-react-diagrams';
import 'beautiful-react-diagrams/styles.css';
import '../../../styles/Contact.scss';


const initialSchema = createSchema({
  nodes: [
    {
      id: 'node-1',
      content: 'Node 1',
      coordinates: [150, 60],
      outputs: [ { id: 'port-1', alignment: 'right' } ],
    },
  ]
});

const CustomRender = ({ id, content, data, inputs, outputs }) => (
    <div style={{background: 'purple'}}>
      <div style={{textAlign: 'right'}}>
        {/* <button  icon="times" size="small" onClick={()=>data.onClick(id)}/> */}
        <button onClick={()=>data.onClick(id)}>
      
        close
        </button> 
      </div>
      <div style={{padding: '15px'}}>
        {content} dsfsdfsdf
      </div>
      <div style={{marginTop: '10px',display:'flex', justifyContent:'space-between'}}>
        {inputs.map((port) => React.cloneElement(port, {style: { width: '25px', height: '25px', background: '#1B263B' }}))}
        {outputs.map((port) => React.cloneElement(port, {style: { width: '25px', height: '25px', background: '#1B263B' }}))}
      </div>
    </div>
);
  const Diagrams = () => {
  // create diagrams schema
  const [schema, { onChange, addNode, removeNode }] = useSchema(initialSchema);
  const  [label, setLabel] = useState('');
  const deleteNodeFromSchema = (id) => {
    const nodeToRemove = schema.nodes.find(node => node.id === id);
    removeNode(nodeToRemove);
  };
const saveSchema = () => {
  console.log('save schema', schema);
}
  const addNewNode = useCallback (
    (e) =>  {
      e.preventDefault();
    const nextNode = {
       id: `node-${Math.random()}`,
       content: `Node ${schema.nodes.length+1}`,
       coordinates: [
         schema.nodes[schema.nodes.length - 1].coordinates[0] + 100,
         schema.nodes[schema.nodes.length - 1].coordinates[1],
       ],
       render: CustomRender,
       data: {onClick: deleteNodeFromSchema},
       inputs: [{ id: `port-${Math.random()}`}],
       outputs: [{ id: `port-${Math.random()}`}],
   };
   
   addNode(nextNode);
  }, [CustomRender, addNode, deleteNodeFromSchema, schema]
  );
  const linkRender = () => (
    <div style={{background: 'purple'}}>
  <select id="cars" name="cars" value={label} onChange={handleChange}>
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="fiat">Fiat</option>
  <option value="audi">Audi</option>
</select>
    </div>
);
const handleChange = (e) => {
  setLabel(e.target.value);
console.log(e.target.value);
}
  const handleSaveChange = useCallback(() => {

    if (schema && schema.links) {
      schema.links.forEach((link) => {
      
    link.label = linkRender(label) 
    link.selectedLabel = label;
      });
    }
    //return onChange(schema);
  }, [schema]);
  useEffect(() => {
    handleSaveChange();
  });
  return (
    <div style={{ height: '22.5rem' }}>
      <button   color="primary" icon="plus" onClick={addNewNode}>Add new node</button>
      <Diagram schema={schema} onChange={onChange} />
      <button onClick={saveSchema}>Save</button>
    </div>
  );
  };


export default Diagrams
