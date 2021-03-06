import styled from "styled-components";
const MultimetroStyles = styled.div `
width: 100%;
height: 100%;
.multimetrocontainer{
    display: flex;
    align-items: center;
    justify-content: center
  }
  .basemultimetro {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 45vh;
      height: 45vh;
      position: relative;
      margin: 30px;
      background: #f0f0f0;
      border-radius: 100%;
      overflow: hidden;
      }
      .multimetro-multimetro-pecas {
      position: sticky;
      top:0%;
      left: 50%;
      bottom:50%;
      right:0%;
      width: 50%;
      height: 50%;
      -webkit-transform-origin: 0% 100%;
      box-shadow: inset 1px 0 0px rgba(255, 255, 255, 0.58);
      border-width: small;
      border-style: solid;
      border-color: #000;
      }
      .multimetro-multimetro-top-pecasrc {
      background: #fff;
      position: absolute;
      border-radius: 100%;
      width:30%;
      height: 30%;
      left:60%;
      margin: -25% 0 0 -25%;
      z-index: 10;
      }
          .pizza1 {
          background: linear-gradient(45deg,  #7057fd 0%,#6816ff 100%);
          }
          .pizza1:hover{
            background-image: linear-gradient(43deg, #ffffff 0%,#c9bfcf 76%);
          }
          .pizza2 {
          -webkit-transform: rotate(45deg);
          background: linear-gradient(68deg,  #2f21f5 0%,#6f3ce4 97%);
          }
          .pizza2:hover{
            background-image: linear-gradient(43deg, #ffffff 0%,#c9bfcf 76%);
          }
          
          .pizza3 {
          -webkit-transform: rotate(90deg);
          background: linear-gradient(60deg,  #5762fd 0%,#161aff 55%);
          }
          .pizza3:hover{
            background-image: linear-gradient(43deg, #ffffff 0%,#c9bfcf 76%);
          }
          .pizza4 {
          -webkit-transform: rotate(135deg);
          background-image: linear-gradient(207deg,  #8357fd 0%,#5416ff 90%);
          }
          .pizza4:hover{
            background-image: linear-gradient(43deg, #ffffff 0%,#c9bfcf 76%);
          }
          .pizza5 {
          -webkit-transform: rotate(180deg);
          background-image: linear-gradient(to bottom,  #7057fd 0%,#2516ff 100%);
          }
          .pizza5:hover{
            background-image: linear-gradient(199deg,#ffffff 27%, #ffffff 87%);
                }
          .pizza6 {
          -webkit-transform: rotate(225deg);
          background-image: linear-gradient(to bottom,  #6257fd 0%,#5416ff  83%);
          }
          .pizza6:hover{
            background-image: linear-gradient(43deg, #ffffff 0%,#c9bfcf 76%);
          }
          .pizza7{
          -webkit-transform: rotate(270deg);
          background-image: linear-gradient(199deg,  #6257fd 0%,#1a16ff 87%);
          }
          .pizza7:hover{
            background-image: linear-gradient(43deg, #ffffff 0%,#c9bfcf 76%);
          }
          .pizza8 {
          -webkit-transform: rotate(270deg) skewX(-45deg);
          background-image: linear-gradient(43deg, #8357fd 0%,#5c16ff 76%);
          }
          .pizza8:hover {
              -webkit-transform: rotate(270deg) skewX(-45deg);
              background-image: linear-gradient(43deg, #ffffff 0%,#c9bfcf 76%);
              }
              .opcao{
                  color: #fefefe;
                  width: 50px;
                  height: 50px;
                }
                .opcaoicon1{
                  margin-top: 20%;
                  margin-left: 15%;
                  float: left;
                  transform: rotate(0deg);
                }
                .opcaoicon2 {
                  margin-top: 25%;
                  margin-left: 13%;
                  margin-right: 184px;
                  float: left;
                  transform: rotate(
                315deg
                );
                }
                .opcaoicon3 {
                  margin-top: 26%;
                  margin-left: 13%;
                  float: left;
                  transform: rotate(
              270deg
              );
              }
                .opcaoicon4 {
                  margin-top: 17%;
                  margin-left: 16%;
                  float: left;
                  transform: rotate(
                    225deg
                );
                }
                .opcaoicon5{
                  margin-top: 17%;
                  margin-left: 16%;
                  float: left;
                  transform: rotate(180deg);
                }
                .opcaoicon6 {
                  margin-top: 25%;
                  margin-left: 15%;
                  float: left;
                  transform: rotate(
                135deg
                );
                }
                .opcaoicon7 {
                  margin-top: 20%;
                  margin-left: 15%;
                  float: left;
                  transform: rotate(
                90deg
                );
                }
                .opcaoicon8 {
                  margin-top: 20%;
                  margin-left: 15%;
                  float: left;
                  transform: rotate(
                0deg
                );
                }

`
export{
    MultimetroStyles
}