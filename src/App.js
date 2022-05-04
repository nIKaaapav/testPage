import './App.css';
import {useState} from "react";
const imgs = [
    'https://cdn.mos.cms.futurecdn.net/CAZ6JXi6huSuN4QGE627NR.jpg',
    "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg",
    'https://photos.com/images/rendered/default/framed-print/images-medium-5/fuji-mountain-in-autumn-doctoregg.jpg?imgWI=36&imgHI=24&sku=CRQ13&mat1=PM918&mat2=&t=2&b=2&l=2&r=2&off=0.5&frameW=0.875']

function App() {
    const [colorButton, setColorButton] = useState('#ff0000');
    const [backgrounds, setBackgrounds] = useState(imgs);

    const randomImgs = (newArr) => {
            let randNum = Math.floor(Math.random() * (2 - 0 + 1));
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
          <nav style={{background: `url('${backgrounds[1]}')`}}>
              <ul>
                  <li><a href="">item 1</a></li>
                  <li><a href="">item 2</a></li>
                  <li><a href="">item 3</a></li>
              </ul>
          </nav>

        <div className='content-wrapper'>
            <button onClick={onClickButton} style={{background: colorButton}}>click</button>
        </div>
          <div></div>
      </main>
      <footer style={{background: `url('${backgrounds[2]}')`}} className='footer-wrapper'>

      </footer>
    </div>
  );
}

export default App;
