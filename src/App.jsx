function App() {
  return (
    <>
      <main id="main">
        <div class="container">
          <h1>hello world</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
            dolorem a ullam repudiandae! Voluptates dolorum ducimus, ipsa natus
            vel ratione.
          </p>
          <h2>hello world</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
            dolorem a ullam repudiandae! Voluptates dolorum ducimus, ipsa natus
            vel ratione.
          </p>
          <h1>hello world</h1>
          <h2>hello world</h2>
          <h3>hello world</h3>
          <h4>hello world</h4>
          <h5>hello world</h5>
          <a href="#" class="link-credential">
            show credential
          </a>
          <ul>
            <li>First Item</li>
            <li>Second Item</li>
            <li>Third Item</li>
          </ul>

          <img
            src="./src/assets/images/avatar-1.jpg"
            alt="computer"
            class="img"
          />
          <br />
          <button class="btn btn-primary" type="button">
            primary button
          </button>
          <button class="btn btn-secondary" type="button">
            secondary button
          </button>

          <br />
          <br />
          <br />
          <div className="pill-container gap-1">
            <button type="button" class="work-pill active">
              all
            </button>
            <button type="button" class="work-pill ">
              development
            </button>
            <button type="button" class="work-pill">
              design
            </button>
          </div>

          <div className="pill-container gap-1">
            <span class="category-pill">development</span>
            <span class="category-pill">design</span>
          </div>
          <br />
          <br />
          <br />

          <form class="form">
            <h4>contact form</h4>
            <div class="form-row">
              <label for="name" class="form-label">
                Name
              </label>
              <input
                type="text"
                placeholder="hello there"
                id="name"
                class="form-input"
              />
            </div>
            <div class="form-row">
              <label for="number" class="form-label">
                Number
              </label>
              <input type="number" id="number" class="form-input" />
            </div>
            <div class="form-row">
              <label for="email" class="form-label">
                Email
              </label>
              <input type="email" id="email" class="form-input" />
              <small class="form-alert">please provide value</small>
            </div>
            <div class="form-row">
              <label for="textarea" class="form-label">
                Textarea
              </label>
              <textarea class="form-textarea">Default Value</textarea>
            </div>
            <button type="submit" class="btn btn-block">
              submit
            </button>
          </form>
          <div class="loading"></div>
          <br />
          <br />
          <div class="title">
            <h2>section title</h2>
            <div class="title-underline"></div>
          </div>
        </div>
      </main>
      <footer id="footer"> narae jang</footer>
    </>
  );
}

export default App;
