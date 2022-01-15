import {Col, Row} from "antd";
import React from 'react';

const lessonsToLang = {    //значения цен, количества занятий и описания в блоках (в зависимости от выбранного языка)
    'ru' : [
        {
            'costPerLesson' : 10,
            'lessonsAmount' : 5,
            'description': 'Лорем ипсум 1',
            'totalCost': 50
        },

        {
            'costPerLesson' : 10,
            'lessonsAmount' : 10,
            'description': 'Лорем ипсум 2',
            'totalCost': 100
        },

        {
            'costPerLesson' : 10,
            'lessonsAmount' : 25,
            'description': 'Лорем ипсум 3',
            'totalCost': 250
        }
    ],
    'en' : [
        {
            'costPerLesson' : 15,
            'lessonsAmount' : 5,
            'description': 'Lorem ipsum 1',
            'totalCost': 75
        },

        {
            'costPerLesson' : 15,
            'lessonsAmount' : 10,
            'description': 'Lorem ipsum 2',
            'totalCost': 150
        },

        {
            'costPerLesson' : 15,
            'lessonsAmount' : 25,
            'description': 'Lorem ipsum 3',
            'totalCost': 375
        }
    ],
    'fr' : [
        {
            'costPerLesson' : 20,
            'lessonsAmount' : 5,
            'description': 'Lorem ipsum french 1',
            'totalCost': 100
        },

        {
            'costPerLesson' : 20,
            'lessonsAmount' : 10,
            'description': 'Lorem ipsum french 2',
            'totalCost': 200
        },

        {
            'costPerLesson' : 20,
            'lessonsAmount' : 25,
            'description': 'Lorem ipsum french 3',
            'totalCost': 500
        }
    ]
};

class SelectLang extends React.Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.props.liftState({value: event.target.value});
    }

    render(){
        return (
            <div>
                <label style={{display:"block", fontSize:16,color:"grey",}}>Select course language</label>
                <select style={{fontSize:18,color:"#6E7179",
                                width:255,height:36,border:"#AEAEAE",
                                background: "#E9EBF5", borderRadius:10,
                                marginTop:14,marginBottom:40}} onChange={this.handleChange}>
                    <option style={{background: "#F5F5F5",fontSize:14,color:"#6E7179"}} value="ru">Russian language</option>
                    <option style={{background: "#F5F5F5",fontSize:14,color:"#6E7179"}} value="fr">French language</option>
                    <option style={{background: "#F5F5F5",fontSize:14,color:"#6E7179"}} value="en">English language</option>
                </select>
            </div>
        );
    }
}

class Prices extends React.Component {
    renderCourse(costPerLesson, lessonsAmount, description, totalCost, index) {
        return (
            <Col span={3} key={index} style={{background: "#F9F9FD",
                                            minWidth:270, height:360, textAlign:"center", marginTop: '20px',
                                            borderRadius:10}}>
                <div style={{background: "#31DC9E", color:"#FFFFFF", textAlign:"center",paddingBottom:10,borderRadius:10}}>
                    <h3 style={{color:"#FFFFFF",fontSize:34,marginBottom:0}}>Start</h3>
                    <p style={{fontSize:20,margin:0}}>${costPerLesson} per lesson</p>
                    <p style={{fontSize:20,margin:0,marginTop:-10}}>{lessonsAmount} lessons</p>
                </div>
                <p style={{fontSize:18,marginTop:45}}>{description}</p>
                <p style={{fontSize:48,margin:0}}><b>${totalCost}</b></p>
            </Col>
        );
    };

    render() {
        var result = [];
        var lang = this.props.value;

        for (let i = 0; i < lessonsToLang[lang].length; i++) {
            result.push(this.renderCourse(lessonsToLang[lang][i].costPerLesson,
                lessonsToLang[lang][i].lessonsAmount,
                lessonsToLang[lang][i].description,
                lessonsToLang[lang][i].totalCost,
                i)
            )
        }
        return(
            <Row align="middle" style={{display:'flex', justifyContent: "space-around"}}>
                {result}
            </Row>
        );
    }
}

class Courses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "ru"
        };
    }
    liftState = state => {
        this.setState(state);
    };

    render() {
        return (
            <div className="courses">
                <SelectLang liftState={this.liftState} />
                <Prices value={this.state.value}/>
            </div>
        );
    }
}

export default Courses;