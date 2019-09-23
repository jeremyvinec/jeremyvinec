import React from 'react'
import { Controller, Scene } from 'scrollmagic';

const Pink = ({ children }) => <span style={{ color: '#FF6AC1' }}>{children}</span>
const Yellow = ({ children }) => <span style={{ color: '#EFF59B' }}>{children}</span>
const Lightblue = ({ children }) => <span style={{ color: '#9AEDFE' }}>{children}</span>
const Green = ({ children }) => <span style={{ color: '#57EE89' }}>{children}</span>
const Blue = ({ children }) => <span style={{ color: '#57C7FF' }}>{children}</span>
const Gray = ({ children }) => <span style={{ color: '#909090' }}>{children}</span>

export default class Cover extends React.Component{
    render(){
        return(
            <section className="cover">
                <div className="centered-container">
                        <h3>Développement web et app</h3>
                        <h2>ReactJS et React Native</h2>
                        <br />
                        <p><Gray> 1</Gray>  <Pink>const</Pink> Contact <Pink>=</Pink> <Lightblue>require</Lightblue><Gray>(</Gray><Green>' jeremyvinec '</Green><Gray>)</Gray></p>
                        <br />
                        <p><Gray> 2</Gray>  <Pink>new</Pink> Contact<Gray>(&#123;</Gray></p>
                        <p><Gray> 3</Gray>      <Yellow>name</Yellow><Pink> : </Pink> <Green>' Jérémy Yvinec '</Green><Gray>,</Gray></p>
                        <p><Gray> 4</Gray>      <Yellow>function</Yellow><Pink> : </Pink> <Green>' Développeur Font-End '</Green><Gray>,</Gray></p>
                        <p><Gray> 5</Gray>      <Yellow>phone</Yellow><Pink> : </Pink> <Pink>+</Pink> <Blue>33 (0)7 50 82 91 15</Blue><Gray>,</Gray></p>
                        <p><Gray> 6</Gray>      <Yellow>email</Yellow><Pink> : </Pink> <Green>' jeremy.yvinec@gmail.com '</Green><Gray>,</Gray></p>
                        <p><Gray> 7</Gray>      <Yellow>website</Yellow><Pink> : </Pink> <Green>' jeremyvinec.dev '</Green></p>
                        <p><Gray> 8</Gray>  <Gray>})</Gray><Pink>.</Pink><Lightblue>start</Lightblue><Gray>()</Gray></p>
                </div>
            </section>
        )
    }
}