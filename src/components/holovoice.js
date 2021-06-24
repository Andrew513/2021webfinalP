import React from 'react'
import styled from 'styled-components'

class ContactRow extends React.Component {
    render() {
      return (
        <tr >
          <td >{this.props.contact.Name}</td>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <td><a href={this.props.contact.Link} target="_blank">{this.props.contact.SongName}</a></td>
        </tr>
      );
    }
  }
  
  class ContactTable extends React.Component {
    render() {
      var rows = [];
      this.props.contacts.forEach((contact) => {
        if (contact.Name.indexOf(this.props.filterText) === -1) {
          return;
        }
        rows.push(<ContactRow contact={contact} />);
      });
      return (
        <table className='table' style={{marginLeft:"auto", marginRight:"auto"}}>
          <thead>
            <tr>
              <th style={{textAlign:"left"}}>Name</th>
              &nbsp;
              <th style={{textAlign:"left"}}>SongName</th>
            </tr>
          </thead>
          <tbody style={{
            flexDirection:"row",
            justifyContent:"center",
            }}>
              {rows}
          </tbody>
        </table>
      );
    }
  }
  
  class SearchBar extends React.Component {
    constructor(props) {
      super(props);
      this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
    }
    
    handleFilterTextInputChange(e) {
      this.props.onFilterTextInput(e.target.value);
    }
  
    render() {
      return (
        <form>
          <input
            className="form-control"
            type="text"
            placeholder="Search..."
            value={this.props.filterText}
            onChange={this.handleFilterTextInputChange}
          />
        </form>
      );
    }
  }
  
  export default class FilterableContactTable extends React.Component {
    constructor(props) {
      super(props);
      // FilterableContactTable is the owner of the state as the filterText is needed in both nodes (searchbar and table) that are below in the hierarchy tree.
      this.state = {
        filterText: ''
      };
      
      this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
      
    }
  
    handleFilterTextInput(filterText) {
      //Call to setState to update the UI
      this.setState({
        filterText: filterText
      });
      //React knows the state has changed, and calls render() method again to learn what should be on the screen
    }
    
    render() {
      return (
        <Table >
          <h1 >Singer Filter</h1>
            <SearchBar
              filterText={this.state.filterText}
              onFilterTextInput={this.handleFilterTextInput}
            />
            <ContactTable
              contacts={this.props.contacts}
              filterText={this.state.filterText}
            />
        </Table>
      );
    }
  }

const Table = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    overflow: hidden;
    padding:10vh 20vw;
    @media (max-width:1150px){
      display: flex;
      justify-content: center;
      flex-direction: column;
      flex-wrap: wrap;
      padding:10vh 0;
      width: auto;

    }
`;
  

  
 

  