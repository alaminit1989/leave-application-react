import React, { Component } from 'react';

class TestJS extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            value:'',
            value2:'',
            resultFound : false,
            filteredData : ""
        };
        this.handleChange=this.handleChange.bind(this);
        this.crimeChange=this.crimeChange.bind(this);
        this.search=this.search.bind(this);
        this.multiFilter=this.multiFilter.bind(this);
    }
  
     multiFilter(array, filters) {
        const filterKeys = Object.keys(filters);
        // filters all elements passing the criteria
        return array.filter((item) => {
            // dynamically validate all filter criteria
            return filterKeys.every(key => !!~filters[key].indexOf(item[key]));
        });
    }
  
    handleChange(event){
        this.setState({value:event.target.value});
    }
  
    crimeChange(event) {
        this.setState({value2:event.target.value});
    }
    search(){
        let _this = this;
        let {value, value2 } =this.state;
        const url=`https://api.myjson.com/bins/e69i9/?i=${value}&q=${value2}`;
  
        fetch(url,{
            method:'GET'
        }).then(response => response.json())
            .then(function(data){
                console.log(data, value, value2);
                let filters = {
                    "police station" : [value],
                    "crime number" : [parseInt(value2)]
                };
                let  filtered = _this.multiFilter(data, filters);
                console.log(filtered);
                if(filtered.length <= 0){
                  _this.setState({resultFound : false})
                }
                else{
                  _this.setState({filteredData : filtered, resultFound : true})
                }
            });
    }
  
    render() {
        return (
            <div>
                <form >
                    <div className="row">
                        <div className="col-md-4">
  
                            <select value={this.state.value} onChange={this.handleChange} className="form-control" placeholder="police station">
                                <option selected>Choose...</option>
                                <option value="areacode">Areacode</option>
                                <option value="changaramkulam">Changaramkulam</option>
                                <option value="edakkara">Edakkara</option>
                                <option value="edavanna">Edavanna</option>
                                <option value="kadampuzha">Kadampuzha</option>
                                <option value="kalikavu">Kalikavu</option>
                                <option value="kalpakanchery">Kalpakanchery</option>
                                <option value="karipur">Karipur</option>
                                <option value="karuvarakundu">Karuvarakundu</option>
                                <option value="kolathur">Kolathur</option>
                                <option value="kondotty">Kondotty</option>
                                <option value="kottakkal">Kottakkal</option>
                                <option value="kuttippuram">Kuttippuram</option>
                                <option value="malappuram">Malappuram</option>
                                <option value="manjeri">Manjeri</option>
                                <option value="mankada">Mankada</option>
                                <option value="melattur">Melattur</option>
                                <option value="nilambur">Nilambur</option>
                                <option value="pandikkad">Pandikkad</option>
                                <option value="parapanangadi">Parapanangadi</option>
                                <option value="perinthalmanna">Perinthalmanna</option>
                                <option value="perumpadappu">Perumpadappu</option>
                                <option value="ponnani">Ponnani</option>
                                <option value="pookottumpadam">Pookkottumpadam</option>
                                <option value="pothukkal">Pothukkal</option>
                                <option value="thanur">Thanur</option>
                                <option value="thenhipalam">Thenhipalam</option>
                                <option value="thirurangadi">Thirurangadi</option>
                                <option value="tirur">Tirur</option>
                                <option value="valanchery">Valanchery</option>
                                <option value="vazhakad">Vazhakad</option>
                                <option value="vazhikadavu">Vazhikadavu</option>
                                <option value="vengara">Vengara</option>
                                <option value="vandoor">Vandoor</option>
                            </select>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group is-empty">
                                <input type="number" placeholder="Crime Number" className="form-control" value={this.state.value2} onChange={this.crimeChange}/>
                                <span className="material-input"></span></div>
                        </div>
  
                        <div className="col-md-4">
                            <button type="button"
                                    className="btn btn-primary btn-block"
                                    onClick={()=> this.search()}
                            >Search</button>
                        </div>
                        {!this.state.resultFound ? <div> No Data Found!!</div> : 
                          JSON.stringify(this.state.filteredData)}
                    </div>
                </form>
            </div>
        )
    }
  }
  export default TestJS;