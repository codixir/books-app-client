import React, { Component } from 'react';

class NewBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            author: '',
            year: '',
        };
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.title.trim() 
            && this.state.author.trim()
            && this.state.year.trim()) {
                this.props.onAddBook(this.state);
                this.handleReset();
        }
    }

    handleReset() {
        this.setState({
            title: '',
            author: '',
            year: '',
        });
    }    
 
    render() {
        return (
            <div>
                <h1>Create a new book</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Title</label>
                        <input type="text" 
                            className="form-control"
                            name="title"
                            onChange={this.handleInputChange}
                            value={this.state.title}
                        />  
                    </div>
                    <div className="form-group">
                        <label>Author</label>
                        <input type="text" 
                            className="form-control"
                            name="author"
                            onChange={this.handleInputChange}
                            value={this.state.author}
                        />
                    </div>
                    <div className="form-group">
                        <label>Year</label>
                        <input type="text" 
                            className="form-control"
                            name="year"
                            onChange={this.handleInputChange}
                            value={this.state.year}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">ADD</button>
                    <button type="button" className="btn btn-primary"
                        onClick={this.handleReset}
                    >Clear</button>
                </form>
            </div>
        )
    }
}

export default NewBook;