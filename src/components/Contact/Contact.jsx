import React from 'react'

export default function Contact() {
  return <>
    <div className="contact-us">
		<div className="title">
			<h1>Contact Us</h1>
		</div>
		<div id="form">
			<form className='' >
				<div className="names flex flex-col ">
					<input className='m-4 border ' type="text" placeholder="Name" id="name" name="name"></input>
					<input className='m-4 'type="email" placeholder="Email" id="email" name="email" required></input>
          <input className='m-4' type="number" placeholder="Age" id="subject" name="subject" required></input>
          <input className='m-4' type="password" placeholder="password" id="subject" name="password" required></input>

				</div>
			
			
				<div className="submit-button">
					<button className='border rounded' type="submit">SEND MESSAGE</button>
				</div>
			</form>
		</div>
	</div>

    </>

}
