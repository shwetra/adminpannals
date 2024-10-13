import React, { useState } from "react";
import { Link } from "react-router-dom";
function DTL20() {
  return (
    <>
      <div className="main-content">
        <div className="page-content">
          <div className="detail-page-container">
            <div className="center-main-container dtl20">
              <div className="center-content casino-table">
                {/* <div className="game-header">
                  <span className="game-header-name">BALL BY BALL</span>
                  <div>
                    <span>Round ID: 5881427651143</span>
                  </div>
                </div> */}

                <div className="bg-dark rounded p-5 text-center">
                  <h4>Iframe Space</h4>
                </div>
                <div className="market-container">
                  <div className="casino-detail">
                    <div className="teen1daycasino-container d-none-small">
                      <div className="teen1dayleft">
                        <div className="casino-box-row mb-0">
                          <div className="casino-nation-name no-border">
                            <div />
                          </div>
                          <div className="casino-bl-box">
                            <b>D</b>
                          </div>
                          <div className="casino-bl-box">
                            <b>T</b>
                          </div>
                          <div className="casino-bl-box">
                            <b>L</b>
                          </div>
                        </div>
                        <div className="casino-box-row">
                          <div className="casino-nation-name">
                            <b>Winner</b>
                          </div>
                          <div className="float-right dtl20info">
                            <i
                              data-toggle="collapse"
                              data-target="#demo-l-0"
                              className="fas fa-info-circle"
                            />
                            <div id="demo-l-0" className="collapse icon-range">
                              R:<span>100</span>-<span>1L</span>
                            </div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item suspended">
                              <span className="casino-box-odd">0</span>
                              <span className="casino-book book-black">0</span>
                            </div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item suspended">
                              <span className="casino-box-odd">0</span>
                              <span className="casino-book book-black">0</span>
                            </div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item suspended">
                              <span className="casino-box-odd">0</span>
                              <span className="casino-book book-black">0</span>
                            </div>
                          </div>
                        </div>
                        <div className="casino-box-row">
                          <div className="casino-nation-name casino-card-img">
                            <span>
                              <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/spade.png" />
                              <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/club.png" />
                            </span>
                          </div>
                          <div className="float-right dtl20info">
                            <i
                              data-toggle="collapse"
                              data-target="#demo-l-1"
                              className="fas fa-info-circle"
                            />
                            <div id="demo-l-1" className="collapse icon-range">
                              R:<span>100</span>-<span>5K</span>
                            </div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item suspended">
                              <span className="casino-box-odd">0</span>
                              <span className="casino-book book-black">0</span>
                            </div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item suspended">
                              <span className="casino-box-odd">0</span>
                              <span className="casino-book book-black">0</span>
                            </div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item suspended">
                              <span className="casino-box-odd">0</span>
                              <span className="casino-book book-black">0</span>
                            </div>
                          </div>
                        </div>
                        <div className="casino-box-row">
                          <div className="casino-nation-name casino-card-img">
                            <span>
                              <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/heart.png" />
                              <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/diamond.png" />
                            </span>
                          </div>
                          <div className="float-right dtl20info">
                            <i
                              data-toggle="collapse"
                              data-target="#demo-l-2"
                              className="fas fa-info-circle"
                            />
                            <div id="demo-l-2" className="collapse icon-range">
                              R:<span>100</span>-<span>5K</span>
                            </div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item suspended">
                              <span className="casino-box-odd">0</span>
                              <span className="casino-book book-black">0</span>
                            </div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item suspended">
                              <span className="casino-box-odd">0</span>
                              <span className="casino-book book-black">0</span>
                            </div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item suspended">
                              <span className="casino-box-odd">0</span>
                              <span className="casino-book book-black">0</span>
                            </div>
                          </div>
                        </div>
                        <div className="casino-box-row">
                          <div className="casino-nation-name">
                            <b>Odd</b>
                          </div>
                          <div className="float-right dtl20info">
                            <i
                              data-toggle="collapse"
                              data-target="#demo-l-3"
                              className="fas fa-info-circle"
                            />
                            <div id="demo-l-3" className="collapse icon-range">
                              R:<span>100</span>-<span>5K</span>
                            </div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item suspended">
                              <span className="casino-box-odd">0</span>
                              <span className="casino-book book-black">0</span>
                            </div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item suspended">
                              <span className="casino-box-odd">0</span>
                              <span className="casino-book book-black">0</span>
                            </div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item suspended">
                              <span className="casino-box-odd">0</span>
                              <span className="casino-book book-black">0</span>
                            </div>
                          </div>
                        </div>
                        <div className="casino-box-row">
                          <div className="casino-nation-name">
                            <b>Even</b>
                          </div>
                          <div className="float-right dtl20info">
                            <i
                              data-toggle="collapse"
                              data-target="#demo-l-4"
                              className="fas fa-info-circle"
                            />
                            <div id="demo-l-4" className="collapse icon-range">
                              R:<span>100</span>-<span>5K</span>
                            </div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item suspended">
                              <span className="casino-box-odd">0</span>
                              <span className="casino-book book-black">0</span>
                            </div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item suspended">
                              <span className="casino-box-odd">0</span>
                              <span className="casino-book book-black">0</span>
                            </div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item suspended">
                              <span className="casino-box-odd">0</span>
                              <span className="casino-book book-black">0</span>
                            </div>
                          </div>
                        </div>
                        <div className="casino-box-row">
                          <div className="casino-nation-name casino-card-img">
                            <span>
                              <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/A.png" />
                            </span>
                          </div>
                          <div className="float-right dtl20info">
                            <i
                              data-toggle="collapse"
                              data-target="#demo-l-5"
                              className="fas fa-info-circle"
                            />
                            <div id="demo-l-5" className="collapse icon-range">
                              R:<span>100</span>-<span>5K</span>
                            </div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item suspended">
                              <span className="casino-box-odd">0</span>
                              <span className="casino-book book-black">0</span>
                            </div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item suspended">
                              <span className="casino-box-odd">0</span>
                              <span className="casino-book book-black">0</span>
                            </div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item suspended">
                              <span className="casino-box-odd">0</span>
                              <span className="casino-book book-black">0</span>
                            </div>
                          </div>
                        </div>
                        <div className="casino-box-row">
                          <div className="casino-nation-name casino-card-img">
                            <span>
                              <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/2.png" />
                            </span>
                          </div>
                          <div className="float-right dtl20info">
                            <i
                              data-toggle="collapse"
                              data-target="#demo-l-6"
                              className="fas fa-info-circle"
                            />
                            <div id="demo-l-6" className="collapse icon-range">
                              R:<span>100</span>-<span>5K</span>
                            </div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item suspended">
                              <span className="casino-box-odd">0</span>
                              <span className="casino-book book-black">0</span>
                            </div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item suspended">
                              <span className="casino-box-odd">0</span>
                              <span className="casino-book book-black">0</span>
                            </div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item suspended">
                              <span className="casino-box-odd">0</span>
                              <span className="casino-book book-black">0</span>
                            </div>
                          </div>
                        </div>
                        <div className="casino-box-row">
                          <div className="casino-nation-name casino-card-img">
                            <span>
                              <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/3.png" />
                            </span>
                          </div>
                          <div className="float-right dtl20info">
                            <i
                              data-toggle="collapse"
                              data-target="#demo-l-7"
                              className="fas fa-info-circle"
                            />
                            <div id="demo-l-7" className="collapse icon-range">
                              R:<span>100</span>-<span>5K</span>
                            </div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item suspended">
                              <span className="casino-box-odd">0</span>
                              <span className="casino-book book-black">0</span>
                            </div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item suspended">
                              <span className="casino-box-odd">0</span>
                              <span className="casino-book book-black">0</span>
                            </div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item suspended">
                              <span className="casino-box-odd">0</span>
                              <span className="casino-book book-black">0</span>
                            </div>
                          </div>
                        </div>
                        <div className="casino-box-row">
                          <div className="casino-nation-name casino-card-img">
                            <span>
                              <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/4.png" />
                            </span>
                          </div>
                          <div className="float-right dtl20info">
                            <i
                              data-toggle="collapse"
                              data-target="#demo-l-8"
                              className="fas fa-info-circle"
                            />
                            <div id="demo-l-8" className="collapse icon-range">
                              R:<span>100</span>-<span>5K</span>
                            </div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item suspended">
                              <span className="casino-box-odd">0</span>
                              <span className="casino-book book-black">0</span>
                            </div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item suspended">
                              <span className="casino-box-odd">0</span>
                              <span className="casino-book book-black">0</span>
                            </div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item suspended">
                              <span className="casino-box-odd">0</span>
                              <span className="casino-book book-black">0</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="teen1daycenter" />
                      <div className="teen1dayright">
                        <div className="casino-box-row mb-0 d-none-small">
                          <div className="casino-nation-name no-border">
                            <div />
                          </div>
                          <div className="casino-bl-box">
                            <b>D</b>
                          </div>
                          <div className="casino-bl-box">
                            <b>T</b>
                          </div>
                          <div className="casino-bl-box">
                            <b>L</b>
                          </div>
                        </div>
                        <div className="casino-box-row">
                          <div className="casino-nation-name casino-card-img">
                            <span>
                              <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/5.png" />
                            </span>
                          </div>
                          <div className="float-right dtl20info">
                            <i
                              data-toggle="collapse"
                              data-target="#demo-r-0"
                              className="fas fa-info-circle"
                            />
                            <div id="demo-r-0" className="collapse icon-range">
                              R:<span>100</span>-<span>5K</span>
                            </div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item suspended">
                              <span className="casino-box-odd">0</span>
                              <span className="casino-book book-black">0</span>
                            </div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item suspended">
                              <span className="casino-box-odd">0</span>
                              <span className="casino-book book-black">0</span>
                            </div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item suspended">
                              <span className="casino-box-odd">0</span>
                              <span className="casino-book book-black">0</span>
                            </div>
                          </div>
                        </div>
                        <div className="casino-box-row">
                          <div className="casino-nation-name casino-card-img">
                            <span>
                              <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/6.png" />
                            </span>
                          </div>
                          <div className="float-right dtl20info">
                            <i
                              data-toggle="collapse"
                              data-target="#demo-r-1"
                              className="fas fa-info-circle"
                            />
                            <div id="demo-r-1" className="collapse icon-range">
                              R:<span>100</span>-<span>5K</span>
                            </div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item suspended">
                              <span className="casino-box-odd">0</span>
                              <span className="casino-book book-black">0</span>
                            </div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item suspended">
                              <span className="casino-box-odd">0</span>
                              <span className="casino-book book-black">0</span>
                            </div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item suspended">
                              <span className="casino-box-odd">0</span>
                              <span className="casino-book book-black">0</span>
                            </div>
                          </div>
                        </div>
                        <div className="casino-box-row">
                          <div className="casino-nation-name casino-card-img">
                            <span>
                              <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/7.png" />
                            </span>
                          </div>
                          <div className="float-right dtl20info">
                            <i
                              data-toggle="collapse"
                              data-target="#demo-r-2"
                              className="fas fa-info-circle"
                            />
                            <div id="demo-r-2" className="collapse icon-range">
                              R:<span>100</span>-<span>5K</span>
                            </div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item suspended">
                              <span className="casino-box-odd">0</span>
                              <span className="casino-book book-black">0</span>
                            </div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item suspended">
                              <span className="casino-box-odd">0</span>
                              <span className="casino-book book-black">0</span>
                            </div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item suspended">
                              <span className="casino-box-odd">0</span>
                              <span className="casino-book book-black">0</span>
                            </div>
                          </div>
                        </div>
                        <div className="casino-box-row">
                          <div className="casino-nation-name casino-card-img">
                            <span>
                              <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/8.png" />
                            </span>
                          </div>
                          <div className="float-right dtl20info">
                            <i
                              data-toggle="collapse"
                              data-target="#demo-r-3"
                              className="fas fa-info-circle"
                            />
                            <div id="demo-r-3" className="collapse icon-range">
                              R:<span>100</span>-<span>5K</span>
                            </div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item suspended">
                              <span className="casino-box-odd">0</span>
                              <span className="casino-book book-black">0</span>
                            </div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item suspended">
                              <span className="casino-box-odd">0</span>
                              <span className="casino-book book-black">0</span>
                            </div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item suspended">
                              <span className="casino-box-odd">0</span>
                              <span className="casino-book book-black">0</span>
                            </div>
                          </div>
                        </div>
                        <div className="casino-box-row">
                          <div className="casino-nation-name casino-card-img">
                            <span>
                              <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/9.png" />
                            </span>
                          </div>
                          <div className="float-right dtl20info">
                            <i
                              data-toggle="collapse"
                              data-target="#demo-r-4"
                              className="fas fa-info-circle"
                            />
                            <div id="demo-r-4" className="collapse icon-range">
                              R:<span>100</span>-<span>5K</span>
                            </div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item suspended">
                              <span className="casino-box-odd">0</span>
                              <span className="casino-book book-black">0</span>
                            </div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item suspended">
                              <span className="casino-box-odd">0</span>
                              <span className="casino-book book-black">0</span>
                            </div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item suspended">
                              <span className="casino-box-odd">0</span>
                              <span className="casino-book book-black">0</span>
                            </div>
                          </div>
                        </div>
                        <div className="casino-box-row">
                          <div className="casino-nation-name casino-card-img">
                            <span>
                              <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/10.png" />
                            </span>
                          </div>
                          <div className="float-right dtl20info">
                            <i
                              data-toggle="collapse"
                              data-target="#demo-r-5"
                              className="fas fa-info-circle"
                            />
                            <div id="demo-r-5" className="collapse icon-range">
                              R:<span>100</span>-<span>5K</span>
                            </div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item suspended">
                              <span className="casino-box-odd">0</span>
                              <span className="casino-book book-black">0</span>
                            </div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item suspended">
                              <span className="casino-box-odd">0</span>
                              <span className="casino-book book-black">0</span>
                            </div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item suspended">
                              <span className="casino-box-odd">0</span>
                              <span className="casino-book book-black">0</span>
                            </div>
                          </div>
                        </div>
                        <div className="casino-box-row">
                          <div className="casino-nation-name casino-card-img">
                            <span>
                              <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/J.png" />
                            </span>
                          </div>
                          <div className="float-right dtl20info">
                            <i
                              data-toggle="collapse"
                              data-target="#demo-r-6"
                              className="fas fa-info-circle"
                            />
                            <div id="demo-r-6" className="collapse icon-range">
                              R:<span>100</span>-<span>5K</span>
                            </div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item suspended">
                              <span className="casino-box-odd">0</span>
                              <span className="casino-book book-black">0</span>
                            </div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item suspended">
                              <span className="casino-box-odd">0</span>
                              <span className="casino-book book-black">0</span>
                            </div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item suspended">
                              <span className="casino-box-odd">0</span>
                              <span className="casino-book book-black">0</span>
                            </div>
                          </div>
                        </div>
                        <div className="casino-box-row">
                          <div className="casino-nation-name casino-card-img">
                            <span>
                              <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/Q.png" />
                            </span>
                          </div>
                          <div className="float-right dtl20info">
                            <i
                              data-toggle="collapse"
                              data-target="#demo-r-7"
                              className="fas fa-info-circle"
                            />
                            <div id="demo-r-7" className="collapse icon-range">
                              R:<span>100</span>-<span>5K</span>
                            </div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item suspended">
                              <span className="casino-box-odd">0</span>
                              <span className="casino-book book-black">0</span>
                            </div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item suspended">
                              <span className="casino-box-odd">0</span>
                              <span className="casino-book book-black">0</span>
                            </div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item suspended">
                              <span className="casino-box-odd">0</span>
                              <span className="casino-book book-black">0</span>
                            </div>
                          </div>
                        </div>
                        <div className="casino-box-row">
                          <div className="casino-nation-name casino-card-img">
                            <span>
                              <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/K.png" />
                            </span>
                          </div>
                          <div className="float-right dtl20info">
                            <i
                              data-toggle="collapse"
                              data-target="#demo-r-8"
                              className="fas fa-info-circle"
                            />
                            <div id="demo-r-8" className="collapse icon-range">
                              R:<span>100</span>-<span>5K</span>
                            </div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item suspended">
                              <span className="casino-box-odd">0</span>
                              <span className="casino-book book-black">0</span>
                            </div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item suspended">
                              <span className="casino-box-odd">0</span>
                              <span className="casino-book book-black">0</span>
                            </div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item suspended">
                              <span className="casino-box-odd">0</span>
                              <span className="casino-book book-black">0</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                      
                  </div>
                </div>
              </div>
              <div className="right-sidebar">
                <div className="simplebar-wrapper">
                  <div className="simplebar-height-auto-observer-wrapper">
                    <div className="simplebar-height-auto-observer" />
                  </div>
                  <div className="simplebar-mask">
                    <div className="simplebar-offset">
                      <div className="simplebar-content-wrapper">
                        <div className="simplebar-content">
                          <div id="my-game-bets" className="card m-b-10 my-bet">
                            <div className="card-header">
                              <h6 className="card-title float-start">
                                My Bets
                              </h6>
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#viewMoreModal"
                                className="btn btn-back float-right"
                              >
                                View More
                              </Link>
                            </div>
                            <div className="card-body">
                              <div className="table-responsive">
                                <table className="table coupon-table mb-0">
                                  <thead>
                                    <tr>
                                      <th style={{ minWidth: 90 }}>UserName</th>
                                      <th
                                        className="text-right"
                                        style={{ minWidth: 50 }}
                                      >
                                        Rate
                                      </th>
                                      <th
                                        className="text-right"
                                        style={{ minWidth: 70 }}
                                      >
                                        Amount
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td colSpan={4} className="text-center">
                                        No records found
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* view more modal */}
      <div
        className="modal fade"
        id="viewMoreModal"
        data-backdrop="static"
        data-keyboard="false"
        tabIndex="-1"
        aria-labelledby="viewMoreModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div tabIndex={-1} className="modal-content">
            <header className="modal-header">
              <h5 className="modal-title">View More</h5>
              <button
                aria-label="Close"
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                style={{ filter: "invert(0)" }}
              ></button>
            </header>
            <div className="modal-body">
              <div className="table-responsive">
                <table className="table table-diamond table-bordered">
                  <thead>
                    <tr>
                      <th>No</th> <th>UserName</th> <th>Nation</th>
                      <th className="text-right">Amount</th>
                      <th className="text-right">User Rate</th>
                      <th>Place Date</th> <th>IP</th> <th>Browser Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan="8" className="text-center">
                        No records found
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DTL20;
