import React, {useState} from "react";

const Form = () => {

       /* const [formData, changeFormData] = useState({  //array destructuring
            fullname: "vinodthapa",
            email: "Enter your email ID",
            phone: "9876543211",
            message: "DONATION FOR SUPPORT"
        });*/
     const [formData, setFormData] = useState({
          fullname: "vinodthapa",
          email: "Enter your email ID",
          phone: "9876543211",
          message: "DONATION FOR SUPPORT"
      });


    // function handlechangeall (event) {
    //     this.setState({[event.target.name]: event.target.value})
    // }
   const handlesubmit = (event) => {
        console.log(formData);
        event.preventDefault();
    }

        return (
            <div>
                <form onSubmit={handlesubmit}>
                    <div className="form-group">
                        <label> Full name </label>
                        <input type="text"  className="form-control" value={formData.fullname}
                               onChange={(e) => setFormData({...formData, fullname: e.target.value})}/>
                    </div>
                    <div className="form-group">
                        <label> Email </label>
                        <input type="email"  className="form-control" value={formData.email}
                               onChange={(e) => setFormData({...formData, email: e.target.value})}/>
                    </div>
                    <div className="form-group">
                        <label> Mobile </label>
                        <input type="number"  className="form-control" value={formData.phone}
                               onChange={(e) => setFormData({...formData, phone: e.target.value})}/>
                    </div>
                    <div className="form-group">
                        <label> Message </label>
                        <textarea value={formData.message}  className="form-control"
                                  onChange={(e) => setFormData({...formData, message: e.target.value})}/>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary btn-block">Submit</button>
                    </div>
                </form>
            </div>
        )
}

export default Form;
