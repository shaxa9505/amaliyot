
const App = () => {
  fetch('https://mproweb.uz/YTless/evacore/api/?page=home')
    .catch((err) => console.error(err))
    .then((res) => res.json())
    .then((rjson) => {
      if (!rjson.res.ok) return console.log('Xatolik !!!');
      const branches = rjson.res.data.branches;
      branches.forEach((branch, ind) =>
        filial.insertAdjacentHTML(
          'beforeend',
          <option value="${ind}">${branch.name}</option>
        )
      );
      setInfo(branches[0]);
      filial.onchange = () => {
        setInfo(branches[filial.value]);
      };
    });
  function setInfo(branch) {
    document.querySelector(
      'section.map iframe'
    ).src = https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d11980.80829944661!2d${branch.coords.lon}!3d${branch.coords.lat}!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1661857570343!5m2!1sru!2s;
    document.querySelectorAll('ul.infoBox [data-prop]').forEach((el) => {
      el.dataset.prop == 'work_period'
        ? (el.innerHTML = `${branch[el.dataset.prop].start} - ${
            branch[el.dataset.prop].finish
          }`)
        : (el.innerText = branch[el.dataset.prop]);
    });
  }
  return (
    <main>
      <section class="info">
        <form action="">
          <label>Filialni tanlang:</label>
          <select name="filial" id="filial">
            <option value="none">Filial</option>
          </select>
        </form>
        <ul class="infoBox">
          <li class="item">
            Filial: <span data-prop="name">test</span>
          </li>
          <li class="item">
            Phone: <span data-prop="phone">test</span>
          </li>
          <li class="item">
            Adress: <span data-prop="addres">test</span>
          </li>
          <li class="item">
            Time of working: <span data-prop="work_period">test</span>
          </li>
        </ul>
      </section>
      <section class="map">
        <iframe
          src=""
          width="600"
          height="450"
          style="border: 0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </main>
  );
};


export default App;