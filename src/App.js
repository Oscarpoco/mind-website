
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <div className='logo'>
          <div className='picture'>
            <img src='logo.png' alt='logo'></img>
          </div>
          <div className='name'>
            <h2>Minds</h2>
          </div>
        </div>
        <div className='list-box'>
          <div className='home'>
            <a href='home'>Home</a>
          </div>
          <div className='jbout'>
            <a href='about'>About</a>
          </div>
          <div className='jlog'>
            <a href='blog'>Blog</a> 
          </div>
          <div className='jobs'>
            <a href='jobs'>Jobs</a>
          </div>
        </div>
        <div className='profile'>
          <button>Your Account</button>
        </div>
      </nav>
      <main>
        <div className='empty'>

        </div>
        <div className='heading'>
          <h1>Stunning<br></br>Creative Minds.</h1>
        </div>
        <div className='paragraph'>
          <p>With <span>Minds</span>, remote teams can organize projects, manage<br></br>shifting priorities, and get work done.</p>
        </div>
        <div className='content'>
          <div className='left'>
            <button>Get's more</button>
          </div>
          <div className='right'>
            <div className='first-rect'>
              <div className='one-1'><p>Photoshop Design</p></div>
              <div className='two-1'>
                <div className='sphere'></div>
              </div>
            
            </div>
            <div className='sec-rect'>
              <div className='one-2'><p>Brand experience</p></div>
              <div className='two-2'>
                <div className='sphere'></div>
              </div>
    
            </div>
            <div className='third-rect'>
              <div className='one-3'><p>Mobile Development</p></div>
              <div className='two-3'>
                <div className='sphere'></div>
              </div>
              
            </div>
          </div>
        </div>
      </main>
      <div className='sidebar'>
        <div className='top-container'>
          <div className='eclipse-1'>

          </div>
          <div className='circle-6'>
            
          </div>
          <div className='eclipse-2'>
            
          </div>
          <div className='eclipse-3'>
            <div className='sphere'></div>
          </div>
        </div>
        <div className='bottom-container'>
            <div className='left'>
              <div className='first'>
                <div className='left-container-1'>
                  <img src='bell.png' alt='bell'></img>
                </div>
                <div className='right-container-1'>
                  <p>500 clients accross<br></br>
                  15 countries</p>  
                </div>
              </div>
              <div className='second'>
                  <img src='4.jpg' alt='founder'></img>
              </div>
            </div>
            <div className='right'>
              <div className='second'>
                  <img src='3.jpg' alt='achievemnent'></img>
              </div>
              <div className='first'>
                <div className='box-1'>
                  <div className='circle-1'>
                    <img src='user-1.jpg' alt='user'></img>
                  </div>
                  <div className='circle-2'>
                    <img src='user-2.jpg' alt='user'></img>
                  </div>
                  <div className='circle-3'>
                    <img src='user-3.jpg' alt='user'></img>
                  </div>
                  <div className='circle-4'>
                    <img src='user-4.jpg' alt='user'></img>
                  </div>
                  <div className='circle-5'>
                    <img src='user-5.jpg' alt='user'></img>
                  </div>
                </div>
                <div className='box-2'>
                    <p><span>+21k</span> recruiters have <br></br>
                    already subscribed</p>
                </div>
              </div>
            </div>
        </div>
      </div>
      <footer>
          <div className='left'>
              <div className='top'>
                <div className='left-2'>
                  <p>5k+</p>
                </div>
                <div className='right-2'>
                  <p>Trusted By Company</p>
                </div>
              </div>
              <div className='bottom'>
                <div className='bottom-squares'>
                    <img src='docuSign.png' alt='docusign'></img>
                </div>
                <div className='bottom-squares'>
                    <img src='british.png' alt='british'></img>
                </div>
                <div className='bottom-squares'>
                    <img src='fedEx.png' alt='fedEx'></img>
                </div>
                <div className='bottom-squares'>
                    <img src='starlingBank.png' alt='starling'></img> 
                </div>
              </div>
          </div>
          <div className='right'>
            
          </div>
      </footer>
    </div>
  );
}

export default App;
