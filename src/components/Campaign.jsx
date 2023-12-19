

export default function Campaign() {
  return (
    <div>
    {/* banner image */}
    <div>
        <img src="" alt="" />
    </div>
    {/* description */}
      <div className="flex">
          <section>
              <div>
                  <div>
                    <h1>title</h1>
                    <p>short description</p>
                  </div>
                  <div>
                  <progress value="70" max="100">70 %</progress>
                  </div>
              </div>
          
              <div>
                <video src="">the video</video>
              </div>
              <div>
                <p>long description</p>
              </div>
              <div>
                <h1>Funding goal: <span>$120,000</span></h1>
              </div>
              <div>
                <h2>why you should invest in me</h2>
                <ul>
                    <li> benefit is this</li>
                    <li> benefit is this</li>
                    <li> benefit is this</li>
                </ul>
              </div>
          </section>
          {/* payment */}
          <section>
          <div>
                <h1>how much do you want to invest?</h1>
                <input placeholder="amount" type="number" name="amount" id="amount" />
                <input placeholder="amount" type="range" name="amount" id="amount" />
          </div>
          </section>
      </div>
    </div>
  )
}
