import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';

const customers = [{
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/1',
  'name' : '유영훈',
  'birthday' : '921222',
  'gender' : '남',
  'job' : '대학생'
},
{
  'id' : 2,
  'image' : 'https://placeimg.com/64/64/2',
  'name' : '홍길동',
  'birthday' : '960504',
  'gender' : '남',
  'job' : '대학생'
},
,
{
  'id' : 3,
  'image' : 'https://placeimg.com/64/64/3',
  'name' : '이순신',
  'birthday' : '970604',
  'gender' : '남',
  'job' : '대학생'
}]

class App extends Component{
  render(){
    return (
      <div>
      {
        customers.map(c=>{
          return <Customer
            key={c.id}//map을 사용할때에는 key를 사용해야한다.
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
          />
        })
      }
      </div>
    );
  }
}

export default App;
