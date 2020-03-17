/*
    author: @Robwert Mota
    start date: 20/11/2019

*/
/* color palette */
body {
  font-family: "Source Sans Pro", sans-serif;
}
body .btn {
  border-radius: 0px;
}
body .orange {
  background: #e45424;
  color: white;
  border-color: #e45424;
}
body .blue {
  background: #01a2b6;
  color: white;
}
body .green {
  background: #588d32;
  color: white;
}
body .yellow {
  background: #eaa22e;
  color: black;
}
body .grey {
  background: #e9e9e9;
  color: black;
}
body .darkgrey {
  background: #3c3c3c;
  color: white;
}

.main-header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10vw;
  padding-left: 20vw;
  padding-right: 20vw;
  background: url("../img/header.jpg");
  background-size: cover;
  background-attachment: fixed;
  position: relative;
}
.main-header .header-news {
  position: absolute;
  bottom: 0;
  color: white;
  width: 100%;
  text-align: center;
  background: rgba(33, 33, 33, 0.5);
}
.main-header .header-news span {
  color: #e45424;
}
.main-header .header-news p {
  padding: 10px;
  margin: 0;
  margin-bottom: 0px;
}

.overlay {
  position: relative;
}

.overlay:after {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.9;
  background: rgba(33, 33, 33, 0.9);
  z-index: 0;
}

.header-input {
  display: flex;
}
.header-input .search-bar {
  font-size: 0.9em;
  padding: 0.9vw;
  border: none;
  width: 90%;
}
.header-input .search-button {
  width: 20%;
  font-weight: 700;
}
.header-input .popular-topics-button {
  flex-grow: 2;
  margin-left: 10px;
  background: transparent;
  border: 2px solid white;
  color: white;
  font-weight: 800;
}
.header-input .form-control {
  border-radius: 0px;
}

.brand-msg {
  color: white;
  padding-top: 2rem;
  text-shadow: 0px 1px 0px black;
  font-size: 2.5vw;
}

.has-search .search-bar {
  padding-left: 2.375rem;
}

.has-search .form-control-feedback {
  position: absolute;
  display: block;
  width: 2.375rem;
  height: 2.375rem;
  line-height: 2.375rem;
  text-align: center;
  color: #aaa;
}

.search-bar:active .form-control-feedback {
  color: black;
}

.welcome-section {
  background: #f7f7f7;
  text-align: center;
  padding: 4vw;
  padding-left: 20vw;
  padding-right: 20vw;
}

.features-wrapper {
  padding-top: 4em;
  padding-left: 6em;
  padding-right: 6em;
  padding-bottom: 4em;
}
.features-wrapper .grid-element .icon {
  color: #e45424;
  font-size: 1.7em;
  font-weight: 400;
}
.features-wrapper .grid-element h2 {
  color: #0b7fbc;
  font-weight: 600;
  font-size: 1em;
}
.features-wrapper .grid-element h2 a {
  color: #0b7fbc;
}
.features-wrapper .grid-element p {
  font-size: 0.79rem;
}
.features-wrapper .grid-element {
  padding: 20px;
  border-right: 2px solid rgba(233, 233, 233, 0.5);
  box-shadow: 0px 24px 1px -24px #3c3c3c;
}
.features-wrapper .grid-element:nth-last-child(1) {
  border-right: none;
}
.features-wrapper .nb-bottom {
  box-shadow: none !important;
}

/**/
.help-section {
  background: #3c3c3c;
  color: white;
  padding: 4em 4em 2em 4em;
}
.help-section .help-title {
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.contact-info {
  padding: 1em 5em 3em 2em;
  font-size: 1.2em;
}
.contact-info .icon {
  padding-right: 20px;
  font-size: 1.5rem;
  font-weight: 400;
}
.contact-info div {
  border-right: 1px solid grey;
}
.contact-info div:nth-last-child(1) {
  border-right: none;
}

.footer-wrapper {
  display: flex;
  align-items: baseline;
  border-bottom: 1px solid #e9e9e9;
}

.footer-links {
  list-style-type: none;
}
.footer-links li {
  font-weight: 700;
  padding-left: 5px;
  padding-right: 5px;
  color: #01a2b6;
}
.footer-links li a {
  color: #01a2b6;
}

.social-icons {
  display: flex;
  font-size: 1.5em;
  color: #3c3c3c !important;
}
.social-icons ul {
  color: black !important;
  display: flex;
  list-style-type: none;
}
.social-icons li {
  color: black !important;
  padding-left: 5px;
  padding-right: 5px;
  list-style-type: none;
}

.social-icon {
  color: black;
}

.footer-msg {
  font-size: 0.2em;
  color: #e9e9e9;
}

/**/

/*# sourceMappingURL=output.cs.map */
