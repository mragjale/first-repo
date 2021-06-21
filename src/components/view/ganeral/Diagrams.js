import React, { useCallback, useEffect, useState } from 'react'
import Diagram, { createSchema, useSchema } from 'beautiful-react-diagrams';
import 'beautiful-react-diagrams/styles.css';
import '../../../styles/Contact.scss';
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Kids from '../ganeral/Kidas';

// const initialSchema = createSchema({
//   nodes: [
//     {
//       id: 'node-1',
//       content: 'Node 1',
//       coordinates: [150, 60],
//       inputs: [
//         { id: 'port-1', alignment: 'left' },
//       ],
//       outputs: [
//         { id: 'port-2', alignment: 'right' },
//       ],

//     },
//   ]
// });


  const Diagrams = () => {
  
  // create diagrams schema
  const deleteNodeFromSchema = (id) => {
    const nodeToRemove = schema.nodes.find(node => node.id === id);
    removeNode(nodeToRemove);
  };

  
    const CustomRender = useCallback(({ id, content, data, inputs, outputs }) => (
      <div style={{background: 'green'}}>
        <div style={{textAlign: 'right'}}>
          {/* <button  icon="times" size="small" onClick={()=>data.onClick(id)}/> */}
          <button onClick={()=>data.onClick(id)}>
        
          close
          </button> 
        </div>
        <div style={{padding: '15px'}}>
          {content} 
        </div>
        <div style={{marginTop: '10px',display:'flex', justifyContent:'space-between'}}> 
        {/* <i className="fas fa-arrow-right"></i> <FontAwesomeIcon icon={faArrowRight} /> */}
          {inputs.map((port) => React.cloneElement(port, {style: { width: '25px', height: '25px', background: '#1B263B' },
          className: "fas fa-arrow-right"}, ))}
          {outputs.map((port) => React.cloneElement(port, {style: { width: '25px', height: '25px', background: '#1B263B' }}))}
        </div>
      </div>     
  ));
  const initSchema = JSON.parse(localStorage.getItem("schema"));
  if (initSchema && initSchema.nodes) {
    initSchema.nodes.forEach((node, key) => {
      node.render = CustomRender;
      node.data = {onClick: deleteNodeFromSchema}
      initSchema.nodes[key] = node;
    });
  }
  const initialSchema = createSchema(
    initSchema
      ? initSchema
      : {
          nodes: [
    {
      id: 'node-1',
      content: 'Node 1',
      coordinates: [150, 60],
      inputs: [
        { id: 'port-1', alignment: 'left' },
      ],
      outputs: [
        { id: 'port-2', alignment: 'right' },
      ],
      data: {onClick: deleteNodeFromSchema}

    },
  ]
        }
  );
  const [schema, { onChange, addNode, removeNode, onSelect, connect}] = useSchema(initialSchema);
  // const  [label, setLabel] = useState({input: '', output: '', label: ''});
 
const saveSchema = (e) => {
  e.preventDefault();
  console.log('save schema', schema);
  // schema.links.forEach(link => {
  //   link.label = link.selected;
  // });
localStorage.setItem('schema', JSON.stringify(schema));
}
function show(e) {
  console.log('xvxvcxvxcvxcvxcvxcvxcvxvcxvxvxcv', e);
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
       inputs: [{ id: `port-${Math.random()}`, canLink: show}],
       outputs: [{ id: `port-${Math.random()}`, canLink: show}],
   };
   
   addNode(nextNode);
  }, [CustomRender, addNode, deleteNodeFromSchema, schema]
  );

  // const handleChange = (e, link) => {
  //   // onChange(schema)
  //   // link.label = e.target.value
  //   // onSelect()
  //   // connect({...label, label: e.target.value})
  //   // setLabel(label);
  // console.log(e, link);
  // };
  const linkRender = (link) => (
    <div style={{background: 'purple'}}>
  <select id="cars" name="cars" value={link.selected} onChange={(e) => {link.label =  link.label ? link.label : e.target.value;
  link.selected =  link.selected ? link.selected : e.target.value;}}>
  <option value="">Select</option>
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="fiat">Fiat</option>
  <option value="audi">Audi</option>
</select>
    </div>
);

  const handleSaveChange = useCallback(() => {

    if (schema && schema.links) {
      schema.links.forEach((link) => {
        // setLabel({input: link.input, output: link.output, label: ''});
        // link.label = <Kids handleChange={handleChange} label={label}></Kids>
        link.label = linkRender(link)
    // link.selected = label;
  
      });
    }
    //return onChange(schema);
  }, [schema.links]);
  useEffect(() => {
    handleSaveChange();
  }, [schema.links]);
  const onConnect = useCallback(() => {}, []);
  return (
    <div style={{ height: '22.5rem' }}>
      <button   color="primary" icon="plus" onClick={addNewNode}>Add new node</button>
      <Diagram schema={schema} onChange={onChange} connect={onConnect}/>
      <button onClick={saveSchema}>Save</button>
    </div>
  );
  };


export default Diagrams
