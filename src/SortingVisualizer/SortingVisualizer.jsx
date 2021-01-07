import  React from 'react';
import  './SortingVisualizer.css';
import { Component } from 'react';
import { getMergeSortAnimations } from '../sortingAlgorithms/mergeSort.js';
import { getBubbleSortAnimations } from '../sortingAlgorithms/bubbleSort.js';
import { getInsertionSortAnimations } from '../sortingAlgorithms/insertionSort.js';
import { getQuickSortAnimations } from '../sortingAlgorithms/quickSort.js';
import { getSelectionSortAnimations } from '../sortingAlgorithms/selectionSort.js';

const BAR_HEIGHT_RANGE = 600;
// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'black';

class SortingVisualizer extends Component {
    constructor(props){
        super(props);

        this.state = {
            array: [],
            numberArrayBars: 50,
            barWidth: 10,
            animationSpeedMS: 7,
        };
    }
    
    componentDidMount() {
        this.resetArray();
    }

    resetArray(){
        const array = [];
        for (let i = 0; i < this.state.numberArrayBars; i++){
            array.push(randomIntFromInterval(5, BAR_HEIGHT_RANGE));
        }
        this.setState({array});
    }

    bubbleSort(){
        const animations = getBubbleSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
          const arrayBars = document.getElementsByClassName('array-bar');
          const isColorChange = i % 3 !== 2;

          if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            
            const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;

            setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
            }, i * this.state.animationSpeedMS);
          } else {
            setTimeout(() => {
              const [barOneIdx, oldHeight, newHeight] = animations[i];
              if (oldHeight > newHeight) {
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barOneIdx+1].style;

                barOneStyle.height = `${newHeight}px`;
                barTwoStyle.height = `${oldHeight}px`;
              }
            }, i * this.state.animationSpeedMS);
          }
        }
    }

    quickSort() {
      const animations = getQuickSortAnimations(this.state.array);
      
      console.log(animations);
      for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName('array-bar');
        const isColorChange = i % 3 !== 2;
        ;
        if (isColorChange) {
          const [pivotIdx, barOneIdx, barTwoIdx] = animations[i];
          console.log(pivotIdx, barOneIdx, barTwoIdx);
            const pivotStyle = arrayBars[pivotIdx].style;
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;

          const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
          //Yellow for pivot bar
          const pivotColor = i % 3 === 0 ? "Yellow" : PRIMARY_COLOR;

          setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
            pivotStyle.backgroundColor = pivotColor;
          }, i * this.state.animationSpeedMS);
        } else {
          setTimeout(() => {
            const [barOneIdx, barTwoIdx, oldHeight, newHeight] = animations[i];
            if (oldHeight >= 0 && newHeight >=0) {
              const barOneStyle = arrayBars[barOneIdx].style;
              const barTwoStyle = arrayBars[barTwoIdx].style;

              barOneStyle.height = `${newHeight}px`;
              barTwoStyle.height = `${oldHeight}px`;
            }
          }, i * this.state.animationSpeedMS);
        }
        
      }
    }

    insertionSort(){
      const animations = getInsertionSortAnimations(this.state.array);
      
      console.log(animations);
      for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName('array-bar');
        const isColorChange = i % 3 !== 2;
        ;
        if (isColorChange) {
          const [barOneIdx, barTwoIdx] = animations[i];

          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          
          const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;

          setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
          }, i * this.state.animationSpeedMS);
        } else {
          setTimeout(() => {
            const [barOneIdx, oldHeight, newHeight] = animations[i];
            if (oldHeight < newHeight) {
              const barOneStyle = arrayBars[barOneIdx].style;
              const barTwoStyle = arrayBars[barOneIdx-1].style;

              barOneStyle.height = `${newHeight}px`;
              barTwoStyle.height = `${oldHeight}px`;
            }
          }, i * this.state.animationSpeedMS);
        }
      }
    }

    mergeSort(){
        const animations = getMergeSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
          const arrayBars = document.getElementsByClassName('array-bar');
          const isColorChange = i % 3 !== 2;

          if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            
            const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;

            setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
            }, i * this.state.animationSpeedMS);
          } else {
            setTimeout(() => {
              const [barOneIdx, newHeight] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              barOneStyle.height = `${newHeight}px`;
            }, i * this.state.animationSpeedMS);
          } 
        }
    }

    selectionSort() {
      const animations = getSelectionSortAnimations(this.state.array);
      console.log(animations);
      for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName('array-bar');
        const isColorChange = i % 3 !== 2;

        if (isColorChange) {
          const [barOneIdx, barTwoIdx] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          
          const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;

          setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
          }, i * this.state.animationSpeedMS);
        } else {
          setTimeout(() => {
            const [barOneIdx, barTwoIdx, oldHeight, newHeight] = animations[i];
            if (oldHeight >= 0 && newHeight >=0) {
              const barOneStyle = arrayBars[barOneIdx].style;
              const barTwoStyle = arrayBars[barTwoIdx].style;

              barOneStyle.height = `${newHeight}px`;
              barTwoStyle.height = `${oldHeight}px`;
            }
          }, i * this.state.animationSpeedMS);
        }
      }
    }

    handleChange = (event) => {
      if (event.target.value === "Small") {
        this.setState({ numberArrayBars: 50, barWidth: 10,  animationSpeedMS: 7 }, ()=>{this.resetArray()});
      } else if (event.target.value === "Medium") {
        this.setState({ numberArrayBars: 100, barWidth: 5,  animationSpeedMS: 4 }, ()=>{this.resetArray()});
      } else if (event.target.value === "Large"){
        this.setState({ numberArrayBars: 150, barWidth: 3,  animationSpeedMS: 2 }, ()=>{this.resetArray()});
      }
    }
    render() {
        //destructor
        const { array, barWidth } = this.state;

        return(
          <div>
            <header className="header">
              <h1>Sorting Visualizer</h1>
            </header>
            <div className="array-container">
              {array.map((value, idx) => (
                  <div 
                      className="array-bar" 
                      key={idx} 
                      style={{
                          backgroundColor: PRIMARY_COLOR,
                          height: `${value}px`,
                          width: `${barWidth}px`,
                          }}></div>
              ))}
              <div className="button">
                  <label>Size of Array: </label>
                  <select id="lang" onChange={this.handleChange} >
                      <option value="Small">Small</option>
                      <option value="Medium">Medium</option>
                      <option value="Large">Large</option>
                  </select>
                  <button onClick={()=> this.resetArray()} className="btn">Generate New Array</button>
                  <button onClick={()=> this.bubbleSort()} className="btn">Bubble Sort</button>
                  <button onClick={()=> this.quickSort()} className="btn">Quick Sort</button>
                  <button onClick={()=> this.selectionSort()} className="btn">Selection Sort</button>
                  <button onClick={()=> this.insertionSort()} className="btn">Insertion Sort</button>
                  <button onClick={()=> this.mergeSort()} className="btn">Merge Sort</button>
              </div>
          </div>
          </div>
          
        );
    }
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max  - min + 1) + min);
}

export default SortingVisualizer;