import "../styles/Contact.css"

const Contact = () => {
 return (
  <main className="contact">
   <header>
    <div className="column">
     <h1>Contact</h1>
    </div>
   </header>
   <section>
    <form
     action="https://public.herotofu.com/v1/7cad6320-26c7-11ef-b435-b1ba21672864"
     method="POST"
     accept-charset="UTF-8"
    >
     <div>
      <input
       type="text"
       id="name"
       name="Name"
       placeholder="Name"
       required
      />
     </div>
     <div>
      <input
       type="text"
       id="email"
       name="Email"
       placeholder="Email"
       required
      />
     </div>
     <div>
      <textarea
       id="message"
       name="Message"
       placeholder="Message"
       required
      />
     </div>
     <button type="submit">Send</button>
    </form>
   </section>
  </main>
 )
}

export default Contact