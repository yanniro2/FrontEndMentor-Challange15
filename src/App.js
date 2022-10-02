import "./index.css"

function App()
{
  return (
    <div className="App w-screen h-screen font-Karla text-ms  bg-Light-Gray flex items-center justify-center p-10 Mobile:h-full ">
      <div className="content w-1/2 h-4/5 bg-[#fff] rounded-lg drop-shadow-xl Mobile:min-w-full">
        {/* Top */}
        <div className="top w-full h-1/2 p-10 flex flex-col justify-evenly Mobile:p-5 ">


          <h1 className=" text-cyan font-lg text-[1.5rem]">Join our community</h1>

          <h3 className=" text-Bright-Yellow font-lg"> 30-day, hassle-free money back guarantee
          </h3>

          <p className=" text-Grayish-Blue">
            Gain access to our full library of tutorials along with expert code reviews.
            Perfect for any developers who are serious about honing their skills.
          </p>

        </div>
        {/* Bottom */}
        <div className="bottom w-full h-1/2 flex Mobile:flex-col">
          {/* Left */}
          <div className="left w-1/2 h-full bg-cyan p-10 text-[#fff] flex flex-col  justify-around  rounded-bl-lg Mobile:w-full Mobile:rounded-none Mobile:p-5">
            <h3 className=" font-lg text-[1.2rem]">Monthly Subscription</h3>

            <h1 className="font-lg text-[2rem] flex items-center gap-3"> $29 <span className="font-ms text-ms text-Light-Gray">per month </span></h1>

            <p>Full access for less than $1 a day</p>

            <button className="p-3 bg-Bright-Yellow w-full rounded shadow-lg">Sign up</button>
          </div>

          {/* Right */}
          <div className="right w-1/2 h-full bg-cyan-2 text-[#fff] p-10 flex gap-3 flex-col rounded-br-lg Mobile:w-full Mobile:rounded-b-lg Mobile:p-5 ">
            <h3 className="font-lg">Why Us</h3>
            <p className=" text-Light-Gray text-[14px]"> Tutorials by industry experts
              Peer & expert code review
              Coding exercises
              Access to our GitHub repos
              Community forum
              Flashcard decks
              New videos every week</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
