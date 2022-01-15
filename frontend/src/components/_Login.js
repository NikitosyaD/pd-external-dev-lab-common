import React from 'react';
import {message} from "antd";

import firebase from "firebase/app";
import {auth} from "../firebase";
import store from "../redux/store";
import {authAPI} from "../api/api";

// import '../static/css/aos.min.css';
import '../static/css/mixins.css';
import '../static/css/style.css';

// import jquery from '../static/js/jquery-3.5.1.min';
// import aos from '../static/js/aos.min';
// import progressbar from '../static/js/progressbar.min';
// import smoothscroll from '../static/js/SmoothScroll.min';
// import main from '../static/js/main';

import logo from '../static/img/logo.svg';
import banner_left from '../static/img/banner/left.svg';
import banner_right from '../static/img/banner/right.svg';
import arrow_down from '../static/img/banner/arrow-down.svg';
import about_us from '../static/img/about-us/img.png';
import advantages_icon1 from '../static/img/icons/advantages/Icon1.svg';
import advantages_icon2 from '../static/img/icons/advantages/Icon2.svg';
import advantages_icon3 from '../static/img/icons/advantages/Icon3.svg';
import advantages_icon4 from '../static/img/icons/advantages/Icon4.svg';
import russian_build from '../static/img/icons/courses/Russian-Build.svg';
import big_ben from '../static/img/icons/courses/Big-Ben.svg';
import eiffel_tower from '../static/img/icons/courses/Eiffel-tower.svg';
import quotes from '../static/img/icons/reviews/quotes.svg';
import reviews1 from '../static/img/reviews/img1.png';
import reviews2 from '../static/img/reviews/img2.png';
import reviews3 from '../static/img/reviews/img3.png';

// for message component watch antd Update Message Content (https://ant.design/components/message/)
const key = 'updatable';

class Login extends React.Component {
  // componentDidMount() {
  //   const script = document.createElement("script");
  //   script.src = "../static/js/main.js";
  //   script.async = true;
  //   script.onload = () => this.scriptLoaded();
  //
  //   document.body.appendChild(script);
  //
  // }
  render() {

    let is_teacher = false;

    function onChange(e) {
      is_teacher = e.target.checked;
    }

    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider)
          .then(function (result) {
            let user = result.user;

            // console.log(user.email);
            // console.log(user.displayName);
            // console.log(user.uid);
            authAPI.login(user.uid, user.email);

            // Эти данные должный отправиться на эндпоинт POST http://194.67.110.179:5000/auth
            // Параметры email=user.email fullname=user.displayName googleuid=user.uid

            // если такой юзер есть то вернёт его uid(с бека), через который далее можно получить все прочие данные по апи.
            // если такой такого нет, то он его добавит и по хорошему потом перезайти в аккаунт чтобы всё подгрузилось, ну или замутить свою подгрузку(пока забей).
            // Главное сам запрос сделать чтобы работало

            store.dispatch({type: "USER/SET_UID", data: user.uid})
            message.success({content: `Hi ${user.displayName}`, key});
          })
          .catch(function (error) {
            console.error(error.message)
            message.error('Login error');
          });
    }

    return (
        <>
          <header className="header" id="header">
            <div className="container">
              <div className="header__content">
                <a href="#" className="logo">
                  <img src={logo} alt="Лого" className="logo__img"/>
                </a>
                <nav className="nav">
                  <ul className="nav__menu">
                    <li className="nav__menu__item">
                      <a href="#about" className="menu__item__link">
                        About
                      </a>
                    </li>
                    <li className="nav__menu__item">
                      <a href="#advantages" className="menu__item__link">
                        Advantages
                      </a>
                    </li>
                    <li className="nav__menu__item">
                      <a href="#courses" className="menu__item__link">
                        Courses
                      </a>
                    </li>
                    <li className="nav__menu__item">
                      <a href="#reviews" className="menu__item__link">
                        Reviews
                      </a>
                    </li>
                  </ul>
                </nav>
                <div className="lang">
                  <a href="#" className="lang__link">Ru</a>
                  <span>/</span>
                  <a href="#" className="lang__link active">En</a>
                  <span>/</span>
                  <a href="#" className="lang__link">Fr</a>
                </div>
                <a href="#" className="common-btn enter-link" onClick={signInWithGoogle}>
                  <span>Sign In</span>
                  <svg width="19" height="23" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M18.0938 1.34375V21.6562C18.0938 21.8635 18.0114 22.0622 17.8649 22.2087C17.7184 22.3552 17.5197 22.4375 17.3125 22.4375H1.6875C1.4803 22.4375 1.28159 22.3552 1.13507 22.2087C0.98856 22.0622 0.90625 21.8635 0.90625 21.6562V20.0938H2.46875V20.875H16.5312V2.125H2.46875V4.46875H0.90625V1.34375C0.90625 1.13655 0.98856 0.937836 1.13507 0.791323C1.28159 0.64481 1.4803 0.5625 1.6875 0.5625H17.3125C17.5197 0.5625 17.7184 0.64481 17.8649 0.791323C18.0114 0.937836 18.0938 1.13655 18.0938 1.34375ZM6.60156 14.8516L7.71094 15.9609L11.6172 12.0547C11.6904 11.9821 11.7485 11.8957 11.7882 11.8005C11.8279 11.7052 11.8483 11.6031 11.8483 11.5C11.8483 11.3969 11.8279 11.2948 11.7882 11.1995C11.7485 11.1043 11.6904 11.0179 11.6172 10.9453L7.71094 7.03906L6.60156 8.14844L9.17969 10.7188H0.90625V12.2812H9.17969L6.60156 14.8516Z"
                        fill="white"/>
                  </svg>
                </a>
              </div>
            </div>
          </header>
          <main className="main" id="main">
            <section className="banner" id="banner">
              <div className="container">
                <div className="banner__content">
                  <div className="banner__left">
                    <h1 className="main__title">
                      Learn languages
                      easily
                    </h1>
                    <p className="banner__text common-text">
                      On the other hand, we denounce with righteous indignation and dislike men who are so beguiled
                      and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot
                      foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail
                      in their duty through weakness of will, which is the same as saying through shrinking from toil
                      and pain.
                    </p>
                    <a href="#" className="common-btn banner__btn" onClick={signInWithGoogle}>
                      <span>Start with us</span>
                      <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M11.5 0.5625C17.5312 0.5625 22.4375 5.46875 22.4375 11.5C22.4375 17.5312 17.5312 22.4375 11.5 22.4375C6.72656 22.4375 2.53906 19.3828 1.07813 14.8359C0.945313 14.4219 1.17969 13.9844 1.58594 13.8516C2 13.7266 2.4375 13.9531 2.57031 14.3594C3.8125 18.2578 7.40625 20.875 11.5 20.875C16.6719 20.875 20.875 16.6719 20.875 11.5C20.875 6.32812 16.6719 2.125 11.5 2.125C6.59375 2.125 2.55469 5.91406 2.15625 10.7188H15.7344C15.0078 9.85156 13.4766 8.54688 11.8516 7.46094C11.4844 7.22656 11.3906 6.74219 11.6328 6.38281C11.8672 6.02344 12.3594 5.92188 12.7109 6.16406C14.2266 7.17188 17.75 9.71094 17.75 11.5C17.75 13.2891 14.2266 15.8281 12.7109 16.8359C12.3594 17.0781 11.8672 16.9766 11.6328 16.6172C11.3906 16.2656 11.4844 15.7734 11.8516 15.5391C13.4766 14.4531 15.0078 13.1484 15.7344 12.2812H1.34375C0.914062 12.2812 0.5625 11.9297 0.5625 11.5C0.5625 11.2344 0.570312 10.9766 0.59375 10.7188C0.992187 5.04688 5.73438 0.5625 11.5 0.5625Z"
                            fill="white"/>
                      </svg>
                    </a>
                    <img src={banner_left} alt="Декор" className="banner__left__dec"/>
                    <a href="#about" className="arrow-down">
                      <img src={arrow_down} alt="Вниз"/>
                    </a>
                  </div>
                  <div className="banner__right">
                    <img src={banner_right} alt="Декор" className="banner__right__dec"/>
                  </div>
                </div>
              </div>
            </section>
            <section className="about" id="about">
              <div className="container">
                <div className="about__content">
                  <div className="about__left">
                    <h2 className="common-title about__title" data-aos="fade-down" data-aos-duration="800">About us</h2>
                    <p className="about__text common-text" data-aos="fade-right" data-aos-duration="800">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis donec vel, ornare ac, ornare diam
                      tristique. Volutpat venenatis sit at amet dui. Morbi risus ac elementum amet faucibus. Luctus
                      nisl viverra orci dolor, morbi iaculis.
                    </p>
                    {/*<div className="about__teacher-skills">*/}
                    {/*  <h3 className="about__teacher-skills__title">Teacher skills</h3>*/}
                    {/*  <ul className="about__teacher-skills__list">*/}
                    {/*    <li className="teacher-skills__list__item">*/}
                    {/*      <div className="teacher-skills__bar" id="teacher-skills__bar-1">*/}
                    {/*        <span className="teacher-skills__bar__name">English</span>*/}
                    {/*      </div>*/}
                    {/*    </li>*/}
                    {/*    <li className="teacher-skills__list__item">*/}
                    {/*      <div className="teacher-skills__bar" id="teacher-skills__bar-2">*/}
                    {/*        <span className="teacher-skills__bar__name">French</span>*/}
                    {/*      </div>*/}
                    {/*    </li>*/}
                    {/*    <li className="teacher-skills__list__item">*/}
                    {/*      <div className="teacher-skills__bar" id="teacher-skills__bar-3">*/}
                    {/*        <span className="teacher-skills__bar__name">French</span>*/}
                    {/*      </div>*/}
                    {/*    </li>*/}
                    {/*  </ul>*/}
                    {/*</div>*/}
                    <a href="#" className="common-btn about__btn" onClick={signInWithGoogle}>
                      <span>Start now</span>
                      <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M11.5 0.5625C17.5312 0.5625 22.4375 5.46875 22.4375 11.5C22.4375 17.5312 17.5312 22.4375 11.5 22.4375C6.72656 22.4375 2.53906 19.3828 1.07813 14.8359C0.945313 14.4219 1.17969 13.9844 1.58594 13.8516C2 13.7266 2.4375 13.9531 2.57031 14.3594C3.8125 18.2578 7.40625 20.875 11.5 20.875C16.6719 20.875 20.875 16.6719 20.875 11.5C20.875 6.32812 16.6719 2.125 11.5 2.125C6.59375 2.125 2.55469 5.91406 2.15625 10.7188H15.7344C15.0078 9.85156 13.4766 8.54688 11.8516 7.46094C11.4844 7.22656 11.3906 6.74219 11.6328 6.38281C11.8672 6.02344 12.3594 5.92188 12.7109 6.16406C14.2266 7.17188 17.75 9.71094 17.75 11.5C17.75 13.2891 14.2266 15.8281 12.7109 16.8359C12.3594 17.0781 11.8672 16.9766 11.6328 16.6172C11.3906 16.2656 11.4844 15.7734 11.8516 15.5391C13.4766 14.4531 15.0078 13.1484 15.7344 12.2812H1.34375C0.914062 12.2812 0.5625 11.9297 0.5625 11.5C0.5625 11.2344 0.570312 10.9766 0.59375 10.7188C0.992187 5.04688 5.73438 0.5625 11.5 0.5625Z"
                            fill="white"/>
                      </svg>
                    </a>
                  </div>
                  <div className="about__right">
                    <img src={about_us} className="about__right__img" alt="Картинка"/>
                  </div>
                </div>
              </div>
            </section>
            <section className="advantages" id="advantages">
              <div className="container">
                <h2 className="common-title advantages__title" data-aos="fade-down"
                    data-aos-duration="800">Advantages</h2>
                <div className="advantages__content">
                  <div className="advantages__left">
                    <ul className="advantages__list">
                      <li className="advantages__item" data-aos="fade-right" data-aos-duration="800">
                        <div className="advantages__item__top">
                          <img src={advantages_icon1} alt="Иконка"/>
                          <h3 className="advantages__item__name">Learning through
                            communication</h3>
                        </div>
                        <p className="common-text advantages__item__text">
                          Maximum speaking practice - you will speak from the 1st lesson, even if you started
                          learning English from scratch.
                        </p>
                      </li>
                      <li className="advantages__item" data-aos="fade-down" data-aos-duration="800">
                        <div className="advantages__item__top">
                          <img src={advantages_icon2} alt="Иконка"/>
                          <h3 className="advantages__item__name">Human approach</h3>
                        </div>
                        <p className="common-text advantages__item__text">
                          We take into account your peculiarities, and do not engage in conveyor training.
                        </p>
                      </li>
                      <li className="advantages__item" data-aos="fade-up" data-aos-duration="800">
                        <div className="advantages__item__top">
                          <img src={advantages_icon3} alt="Иконка"/>
                          <h3 className="advantages__item__name">Personal program</h3>
                        </div>
                        <p className="common-text advantages__item__text">
                          We adapt to your needs and adapt educational materials to your needs.
                        </p>
                      </li>
                      <li className="advantages__item" data-aos="fade-left" data-aos-duration="800">
                        <div className="advantages__item__top">
                          <img src={advantages_icon4} alt="Иконка"/>
                          <h3 className="advantages__item__name">Reasonable prices</h3>
                        </div>
                        <p className="common-text advantages__item__text">
                          We establish an adequate cost for quality work. We offer discounts up to 30%.
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="advantages__right">
                    <div className="advantages__number" data-aos="fade-left" data-aos-duration="800">
                      <span className="advantages__number__bg">523</span>
                      <span className="advantages__number__front">trained students</span>
                    </div>
                    <div className="advantages__number" data-aos="fade-left" data-aos-duration="800">
                      <span className="advantages__number__bg">8+</span>
                      <span className="advantages__number__front">years of teaching</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="courses" id="courses">
              <div className="container">
                <h2 className="common-title courses__title" data-aos="fade-down" data-aos-duration="800">Courses</h2>
                <div className="courses__content">
                  <div className="courses__left">
                    <h3 className="common-small-title courses__small-title" data-aos="fade-up"
                        data-aos-duration="800">We
                      will teach you any language. From beginner to
                      intermediate.</h3>
                    <p className="courses__text common-text" data-aos="fade-right" data-aos-duration="800">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur sed eu dolor id sed at nibh
                      consectetur aenean. Vestibulum, sit consequat at scelerisque viverra morbi nec dignissim.
                    </p>
                    <a href="#" className="common-btn courses__btn" onClick={signInWithGoogle}>
                      <span>Start now</span>
                      <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M11.5 0.5625C17.5312 0.5625 22.4375 5.46875 22.4375 11.5C22.4375 17.5312 17.5312 22.4375 11.5 22.4375C6.72656 22.4375 2.53906 19.3828 1.07813 14.8359C0.945313 14.4219 1.17969 13.9844 1.58594 13.8516C2 13.7266 2.4375 13.9531 2.57031 14.3594C3.8125 18.2578 7.40625 20.875 11.5 20.875C16.6719 20.875 20.875 16.6719 20.875 11.5C20.875 6.32812 16.6719 2.125 11.5 2.125C6.59375 2.125 2.55469 5.91406 2.15625 10.7188H15.7344C15.0078 9.85156 13.4766 8.54688 11.8516 7.46094C11.4844 7.22656 11.3906 6.74219 11.6328 6.38281C11.8672 6.02344 12.3594 5.92188 12.7109 6.16406C14.2266 7.17188 17.75 9.71094 17.75 11.5C17.75 13.2891 14.2266 15.8281 12.7109 16.8359C12.3594 17.0781 11.8672 16.9766 11.6328 16.6172C11.3906 16.2656 11.4844 15.7734 11.8516 15.5391C13.4766 14.4531 15.0078 13.1484 15.7344 12.2812H1.34375C0.914062 12.2812 0.5625 11.9297 0.5625 11.5C0.5625 11.2344 0.570312 10.9766 0.59375 10.7188C0.992187 5.04688 5.73438 0.5625 11.5 0.5625Z"
                            fill="white"/>
                      </svg>
                    </a>
                  </div>
                  <div className="courses__right">
                    <div className="courses__item" data-aos="fade-right" data-aos-duration="800">
                      <img src={russian_build} alt="Собор"/>
                      <h4 className="common-small-title courses__item__title">Russian</h4>
                      <p className="common-text courses__item__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin imperdiet adipiscing praesent
                      </p>
                    </div>
                    <div className="courses__item" data-aos="fade-up" data-aos-duration="800">
                      <img src={big_ben} alt="Биг-Бен"/>
                      <h4 className="common-small-title courses__item__title">English</h4>
                      <p className="common-text courses__item__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin imperdiet adipiscing praesent
                      </p>
                    </div>
                    <div className="courses__item" data-aos="fade-left" data-aos-duration="800">
                      <img src={eiffel_tower} alt="Эйфилева башня"/>
                      <h4 className="common-small-title courses__item__title">French</h4>
                      <p className="common-text courses__item__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin imperdiet adipiscing praesent
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="reviews" id="reviews">
              <div className="container">
                <h1 className="common-title reviews__title" data-aos="fade-down" data-aos-duration="800">Reviews</h1>
                <div className="reviews__content">
                  <div className="reviews__item" data-aos="fade-right" data-aos-duration="800">
                    <img src={quotes} alt="Кавычки"/>
                    <p className="common-text reviews__item__text">
                      We adapt to your needs and adapt educational materials to your needs.
                    </p>
                    <div className="reviews__item__photo">
                      <img src={reviews1} alt="Фото"/>
                    </div>
                    <span className="common-small-title reviews__item__name">Elmer Mcleod</span>
                  </div>
                  <div className="reviews__item" data-aos="fade-up" data-aos-duration="800">
                    <img src={quotes} alt="Кавычки"/>
                    <p className="common-text reviews__item__text">
                      We adapt to your needs and adapt educational materials to your needs.
                    </p>
                    <div className="reviews__item__photo">
                      <img src={reviews2} alt="Фото"/>
                    </div>
                    <span className="common-small-title reviews__item__name">Elmer Mcleod</span>
                  </div>
                  <div className="reviews__item" data-aos="fade-left" data-aos-duration="800">
                    <img src={quotes} alt="Кавычки"/>
                    <p className="common-text reviews__item__text">
                      We adapt to your needs and adapt educational materials to your needs.
                    </p>
                    <div className="reviews__item__photo">
                      <img src={reviews3} alt="Фото"/>
                    </div>
                    <span className="common-small-title reviews__item__name">Elmer Mcleod</span>
                  </div>
                </div>
              </div>
            </section>
          </main>
          <footer className="footer" id="footer">
            <div className="container">
              <div className="footer__content">
                <a href="#" className="logo">
                  <img src={logo} alt="Лого" className="logo__img"/>
                </a>
                <div className="footer__contacts">
                  <a href="mailto:teacher@gmail.com"
                     className="common-text footer__contacts__link">teacher@gmail.com</a>
                  <a href="tel:8(999)354-44-55" className="common-small-title footer__contacts__link">8(999)
                    354-44-55</a>
                </div>
                <div className="footer__socials">
                  <a href="#" className="footer__socials__link">
                    <svg width="16" height="33" viewBox="0 0 16 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M4.03293 32.913V17.4693H0V11.9088H4.03293V7.15941C4.03293 3.4273 6.4152 0 11.9045 0C14.127 0 15.7704 0.215745 15.7704 0.215745L15.6409 5.4083C15.6409 5.4083 13.9649 5.39178 12.1359 5.39178C10.1564 5.39178 9.83923 6.31549 9.83923 7.84861V11.9088H15.7983L15.539 17.4693H9.83923V32.913H4.03293Z"
                          fill="#2B2B2B"/>
                    </svg>
                  </a>
                  <a href="#" className="footer__socials__link">
                    <svg width="34" height="33" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M16.9985 8.01274C12.3258 8.01274 8.5547 11.7838 8.5547 16.4565C8.5547 21.1292 12.3258 24.9003 16.9985 24.9003C21.6712 24.9003 25.4423 21.1292 25.4423 16.4565C25.4423 11.7838 21.6712 8.01274 16.9985 8.01274ZM16.9985 21.9444C13.9767 21.9444 11.5106 19.4783 11.5106 16.4565C11.5106 13.4347 13.9767 10.9687 16.9985 10.9687C20.0203 10.9687 22.4863 13.4347 22.4863 16.4565C22.4863 19.4783 20.0203 21.9444 16.9985 21.9444ZM25.7881 5.69903C24.6971 5.69903 23.8161 6.58005 23.8161 7.67103C23.8161 8.76201 24.6971 9.64303 25.7881 9.64303C26.8791 9.64303 27.7601 8.76613 27.7601 7.67103C27.7604 7.41197 27.7096 7.1554 27.6106 6.916C27.5117 6.6766 27.3664 6.45907 27.1832 6.27589C27.0001 6.09271 26.7825 5.94747 26.5431 5.84848C26.3037 5.74949 26.0472 5.69871 25.7881 5.69903ZM33.4579 16.4565C33.4579 14.184 33.4785 11.932 33.3509 9.66362C33.2232 7.02879 32.6222 4.69039 30.6955 2.76367C28.7646 0.832841 26.4303 0.235888 23.7955 0.108264C21.523 -0.0193601 19.271 0.00122455 17.0026 0.00122455C14.7301 0.00122455 12.4781 -0.0193601 10.2097 0.108264C7.57488 0.235888 5.23647 0.836958 3.30975 2.76367C1.37892 4.6945 0.78197 7.02879 0.654346 9.66362C0.526721 11.9362 0.547306 14.1881 0.547306 16.4565C0.547306 18.7249 0.526721 20.981 0.654346 23.2494C0.78197 25.8843 1.38304 28.2227 3.30975 30.1494C5.24059 32.0802 7.57488 32.6772 10.2097 32.8048C12.4822 32.9324 14.7342 32.9118 17.0026 32.9118C19.2751 32.9118 21.5271 32.9324 23.7955 32.8048C26.4303 32.6772 28.7687 32.0761 30.6955 30.1494C32.6263 28.2185 33.2232 25.8843 33.3509 23.2494C33.4826 20.981 33.4579 18.7291 33.4579 16.4565ZM29.835 26.1642C29.5345 26.9135 29.1722 27.4734 28.5917 28.0497C28.0112 28.6302 27.4554 28.9925 26.7062 29.2931C24.5407 30.1535 19.3986 29.96 16.9985 29.96C14.5983 29.96 9.45219 30.1535 7.28669 29.2972C6.53741 28.9966 5.97751 28.6344 5.40115 28.0539C4.82066 27.4734 4.45837 26.9176 4.15784 26.1683C3.30152 23.9987 3.49502 18.8567 3.49502 16.4565C3.49502 14.0564 3.30152 8.91022 4.15784 6.74473C4.45837 5.99545 4.82066 5.43555 5.40115 4.85918C5.98163 4.28281 6.53741 3.91641 7.28669 3.61587C9.45219 2.75956 14.5983 2.95305 16.9985 2.95305C19.3986 2.95305 24.5448 2.75956 26.7103 3.61587C27.4596 3.91641 28.0195 4.2787 28.5958 4.85918C29.1763 5.43967 29.5386 5.99545 29.8391 6.74473C30.6955 8.91022 30.502 14.0564 30.502 16.4565C30.502 18.8567 30.6955 23.9987 29.835 26.1642Z"
                          fill="black"/>
                    </svg>
                  </a>
                  <a href="#" className="footer__socials__link">
                    <svg width="34" height="33" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M24.0654 19.6855C23.665 19.4798 21.6704 18.5027 21.2994 18.3705C20.9284 18.2309 20.6566 18.1648 20.3884 18.5762C20.1166 18.9839 19.3452 19.8913 19.1028 20.1668C18.8677 20.4386 18.6289 20.4716 18.2285 20.2696C15.8482 19.0794 14.287 18.1464 12.7185 15.4539C12.3034 14.7376 13.1336 14.789 13.9087 13.2425C14.0409 12.9707 13.9748 12.7393 13.8719 12.5336C13.7691 12.3279 12.961 10.3369 12.623 9.52511C12.2961 8.73535 11.9581 8.84555 11.712 8.83086C11.4769 8.81616 11.2088 8.81616 10.937 8.81616C10.6651 8.81616 10.228 8.91902 9.85699 9.31941C9.48599 9.72715 8.43909 10.7079 8.43909 12.6989C8.43909 14.6898 9.89005 16.6183 10.0884 16.8901C10.2941 17.162 12.9426 21.2467 17.009 23.0062C19.5803 24.1156 20.5868 24.2111 21.8724 24.0201C22.6549 23.9025 24.2675 23.043 24.6017 22.0916C24.936 21.1439 24.936 20.3321 24.8368 20.1631C24.7376 19.9831 24.4658 19.8802 24.0654 19.6855Z"
                          fill="black"/>
                      <path
                          d="M31.8419 10.0796C31.0117 8.10704 29.8216 6.3365 28.3045 4.81574C26.7874 3.29865 25.0169 2.10482 23.0406 1.27832C21.0203 0.42978 18.875 0 16.6637 0H16.5902C14.3642 0.01102 12.208 0.45182 10.1803 1.31873C8.22239 2.15625 6.46654 3.3464 4.96414 4.86349C3.46175 6.38058 2.28261 8.14377 1.46713 10.109C0.622265 12.144 0.196159 14.3076 0.207179 16.5337C0.218199 19.083 0.827972 21.6139 1.97038 23.8767V29.4601C1.97038 30.3931 2.72708 31.1498 3.66011 31.1498H9.24725C11.51 32.2923 14.0409 32.902 16.5902 32.913H16.6674C18.8677 32.913 21.0019 32.4869 23.0112 31.6531C24.9764 30.8339 26.7433 29.6585 28.2567 28.1561C29.7738 26.6537 30.9677 24.8978 31.8015 22.94C32.6684 20.9123 33.1092 18.756 33.1202 16.53C33.1312 14.2929 32.6978 12.122 31.8419 10.0796ZM26.2915 26.1688C23.7165 28.7181 20.3003 30.1213 16.6637 30.1213H16.6013C14.3862 30.1103 12.1859 29.5593 10.2427 28.5234L9.93416 28.3581H4.76211V23.1861L4.59681 22.8775C3.56093 20.9343 3.00993 18.734 2.99891 16.519C2.98422 12.8567 4.38376 9.41842 6.95141 6.82872C9.5154 4.23902 12.9426 2.80642 16.6049 2.79173H16.6674C18.504 2.79173 20.2856 3.14804 21.9643 3.85332C23.6026 4.54024 25.072 5.52836 26.3356 6.79199C27.5955 8.05194 28.5873 9.52495 29.2742 11.1633C29.9869 12.8603 30.3432 14.6603 30.3358 16.519C30.3138 20.1776 28.8775 23.6048 26.2915 26.1688Z"
                          fill="black"/>
                    </svg>
                  </a>
                </div>
                <nav className="nav">
                  <ul className="nav__menu">
                    <li className="nav__menu__item">
                      <a href="#header" className="menu__item__link">
                        Top
                      </a>
                    </li>
                    <li className="nav__menu__item">
                      <a href="#about" className="menu__item__link">
                        About
                      </a>
                    </li>
                    <li className="nav__menu__item">
                      <a href="#advantages" className="menu__item__link">
                        Advantages
                      </a>
                    </li>
                    <li className="nav__menu__item">
                      <a href="#courses" className="menu__item__link">
                        Courses
                      </a>
                    </li>
                  </ul>
                </nav>
                <div className="lang">
                  <a href="#" className="lang__link">Ru</a>
                  <span>/</span>
                  <a href="#" className="lang__link active">En</a>
                  <span>/</span>
                  <a href="#" className="lang__link">Fr</a>
                </div>
                <a href="#" className="common-btn enter-link" onClick={signInWithGoogle}>
                  <span>Sign In</span>
                  <svg width="19" height="23" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M18.0938 1.34375V21.6562C18.0938 21.8635 18.0114 22.0622 17.8649 22.2087C17.7184 22.3552 17.5197 22.4375 17.3125 22.4375H1.6875C1.4803 22.4375 1.28159 22.3552 1.13507 22.2087C0.98856 22.0622 0.90625 21.8635 0.90625 21.6562V20.0938H2.46875V20.875H16.5312V2.125H2.46875V4.46875H0.90625V1.34375C0.90625 1.13655 0.98856 0.937836 1.13507 0.791323C1.28159 0.64481 1.4803 0.5625 1.6875 0.5625H17.3125C17.5197 0.5625 17.7184 0.64481 17.8649 0.791323C18.0114 0.937836 18.0938 1.13655 18.0938 1.34375ZM6.60156 14.8516L7.71094 15.9609L11.6172 12.0547C11.6904 11.9821 11.7485 11.8957 11.7882 11.8005C11.8279 11.7052 11.8483 11.6031 11.8483 11.5C11.8483 11.3969 11.8279 11.2948 11.7882 11.1995C11.7485 11.1043 11.6904 11.0179 11.6172 10.9453L7.71094 7.03906L6.60156 8.14844L9.17969 10.7188H0.90625V12.2812H9.17969L6.60156 14.8516Z"
                        fill="white"/>
                  </svg>
                </a>
              </div>
            </div>
          </footer>
        </>
    )
    // return (
    //   <div style={{display: "flex", justifyContent: "space-around", alignItems: "center", height: "100vh" }}>
    //     <Button type="primary" icon={<LoginOutlined/>} onClick={signInWithGoogle}>Log in with Google</Button>
    //     <Checkbox onChange={onChange}>Я учитель</Checkbox>
    //   </div>
    // )
  }
}

export default Login;
