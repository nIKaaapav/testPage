import './App.css';
import {useState} from "react";
const imgs = [
    'https://cdn.mos.cms.futurecdn.net/CAZ6JXi6huSuN4QGE627NR.jpg',
    "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg",
    'https://photos.com/images/rendered/default/framed-print/images-medium-5/fuji-mountain-in-autumn-doctoregg.jpg?imgWI=36&imgHI=24&sku=CRQ13&mat1=PM918&mat2=&t=2&b=2&l=2&r=2&off=0.5&frameW=0.875',
    'https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg?quality=85&w=1024&h=628&crop=1',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_DEG0AErUjYtcxzot3P2m38SBAV7__zRaC7plXYkUv0lTWmxD7Hg6o9KpRSADYzhQZtE&usqp=CAU',
]

function App() {
    const [colorButton, setColorButton] = useState('#ff0000');
    const [backgrounds, setBackgrounds] = useState(imgs);

    const randomImgs = (newArr) => {
            let randNum = Math.floor(Math.random() * (4 - 0 + 1));
            if (newArr.includes(imgs[randNum])) {
                return randomImgs(newArr);
            }

            return imgs[randNum];
    }
    const onClickButton = () => {
        setColorButton('#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase())
        setBackgrounds((prev) => {
            const newArr = []
            prev.forEach(x => newArr.push(randomImgs(newArr)));
            return newArr;
        });
    }

  return (
    <div className="App">
      <header style={{background: `url('${backgrounds[0]}')`}} className='header-wrapper'>
          header
      </header>
      <main className='main-wrapper'>
          <nav  className='nav-wrapper' style={{background: `url('${backgrounds[1]}')`}}>
              <ul>
                  <li><a href="">item 1</a></li>
                  <li><a href="">item 2</a></li>
                  <li><a href="">item 3</a></li>
              </ul>
          </nav>

        <div className='content-wrapper' style={{background: `url('${backgrounds[2]}')`}}>
            <button onClick={onClickButton} style={{background: colorButton}}>click</button>
        </div>
          <div  className='border-right' style={{background: `url('${backgrounds[3]}')`}}>

          </div>
      </main>
      <footer style={{background: `url('${backgrounds[4]}')`}} className='footer-wrapper'>

      </footer>
    </div>
  );
}

export default App;
