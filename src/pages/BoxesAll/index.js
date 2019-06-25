import React, { Component } from 'react';
import api from '../../services/api';
import { distanceInWords } from 'date-fns';
import pt from 'date-fns/locale/pt';
import socket from 'socket.io-client';

import { MdInsertDriveFile } from 'react-icons/md';

import logo from "../../assets/logo.png";
import '../Box/styles.css';
import './styles.css';

export default class BoxesAll extends Component {

    state = { box: {}, newBox: '' }

    async componentDidMount(){

        this.subscribeToNewFiles();

        const response = await api.get(`boxes/show/all`);    
        console.log(response.data);
        this.setState({ box: response });

        console.log(this.state);

    }

    subscribeToNewFiles = () => {

        // const box = 0;
        // const io = socket('https://r14-omnistack-backend.herokuapp.com');

        // io.emit('connectRoom', box);

        // io.on('file', data => {
        //     this.setState({
        //         box: { ...this.state.box, box: [data, ...this.state.box.data ]}
        //     });
        // });
    } 

    handleSubmit = async e =>{
        e.preventDefault();

        const response = await api.post('boxes',{
            title: this.state.newBox
        });

        this.props.history.push(`/box/${response.data._id}`);
    }

    handleInputChange = (e) => {
        this.setState({ newBox: e.target.value });
    }

  render() {
    return (
        <div id="box-container">
            <header>
                <img src={logo} alt="" />
            </header>
            
            <form onSubmit={this.handleSubmit}>
                <input 
                    placeholder="Nome do Box"
                    value={this.state.newBox}
                    onChange={this.handleInputChange}    
                />
                <button type="submit">CRIAR BOX</button>
            </form>
           
            <ul>
                { this.state.box.data && this.state.box.data.map( box => (

                    <li key={box._id}>
                        <a className="fileInfo" href={ '../'+box._id }>
                            <MdInsertDriveFile size={24} color="#A5Cfff" />
                            <strong>{ box.title }</strong>
                        </a>
                        <span>há{" "} { distanceInWords(box.createdAt, new Date(), { locale: pt }) }</span>
                    </li>

                )) }

            </ul>
        </div>
    );
  }
}
