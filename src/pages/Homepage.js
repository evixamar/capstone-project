import zeke from './asset/zeke.png'
// import zeke-2 from './asset/zeke.png'
import KeanuNeal from './asset/KeanuNeal.jpeg'
import DakPrescott from './asset/DakPrescott.JPG'
import PatrickM from './asset/PatrickM.png'
import MitchT2 from './asset/MitchT2.jpg'
import RoquanS from './asset/RoquanS.jpeg'
import RSmith from './asset/RSmith.jpg'
import { tag } from 'postcss-selector-parser'

class Homepage extends Component {
  state = {
    players: [
      {
        name: 'Keanu Neal',
        Team: '#22, ',
        position: 'SS',
        salary: '40000000.00',
        height: '6-0',
        weight: '211',
        team: 'Atlanta Falcons',
        age: '23',
        experience: '4th',
        college: 'Florida',
        highSchool: 'South Sumter HS',
        image: '',
        draftYear: '2016'
      },
      {
        name: 'Ezekiel Elliott',
        Team: '21',
        position: 'RB',
        salary: '3000000.00',
        height: '6-0',
        weight: '211',
        team: 'Dallas Cowboys',
        age: '23',
        experience: '4th Season',
        college: 'Ohio State',
        highSchool: 'John Burroughs School',
        image: zeke,
        draftYear: 2016
      },
      {
        name: 'Ezekiel Elliott',
        Team: '21',
        position: 'RB',
        salary: '3000000.00',
        height: '6-0',
        weight: '228',
        team: 'Dallas Cowboys',
        age: '23',
        experience: '4th Season',
        college: 'Ohio State',
        highSchool: 'John Burroughs School',
        image: zeke,
        draftYear: 2016
      }
    ]
  }
}

render()
{
  const playersThisSeason = this.state.players.filter(
    player => player.draftYear === 2016
  )

  return (
    <section>
      <div className="bg-image">
        <Header />
        <div className="playerContainer">
          {playersThisSeason.map((player, index) => (
            <React.Fragment key={index}>
              <div>
                <Link to="/zeke-2.jpg" className="click-button" />
                <img src={player.image} alt={player.name} className="image-1" />
                <h4>{player.name} Stats</h4>
              </div>
              <div className="horizontal-stats">
                <p>
                  {player.number} {player.position}
                </p>
                <p> Salary: {player.salary}</p>
                <p> Height: {player.height}</p>
                <p> Weight: {player.weight}</p>
                <h4> Team#: {player.team}</h4>
                <p> Age: {player.age}</p>
                <p> Experience: {player.experience}</p>
                <p> College: {player.college}</p>
                <p> High School: {player.highSchool}</p>
              </div>
            </React.Fragment>
          ))}

          <div>
            <h4>Ezekiel Elliott Stats</h4>
          </div>
          <p> Number#: 21 RB</p>
          <p> Salary: $3000000.00</p>
          <p> Height: 6-0</p>
          <p> Weight: 228</p>
          <p> Team#: Dallas Cowboys</p>
          <p> Age: 23</p>
          <p> Experience: 4th Season</p>
          <p> College: Ohio State</p>
          <p> High School: John Burroughs School</p>
        </div>
        <div>
          <img src={KeanuNeal} alt="Keanue" class="image-2" />
          <h4 Keanu Neal />
          <h4>#22 SS</h4>
        </div>
        <div>
          <p> Salary: $4000000.00</p>
          <p> Height: 6-0</p>
          <p> Weight: 211</p>
          <p> TeamName: Atlanta Falcons</p>
          <p> Age: 23</p>
          <p> Experience: 4th Season</p>
          <p> College: Florida</p>
          <p> High School: South Sumter HS</p>
        </div>
        <div>
          <img src={DakPrescott} alt="DakPrescott" class="image-3" />
        </div>
        <div>
          <h4 Rayne Dakota Prescott />
          <h4>#4 QB</h4>
        </div>
        <div>
          <p> Salary: $6000000.00</p>
          <p> Height: 6-2</p>
          <p> Weight: 238</p>
          <p> TeamName: Dallas Cowboys</p>
          <p> Age: 25</p>
          <p> Experience: 4th Season</p>
          <p> College: Mississippi State</p>
          <p> High School: Haughton High School</p>
        </div>
      </div>
      <img src={PatrickM} alt="PatrickM" class="image-4" />
      <h4 Patrick Mahomes />
      <h4>#15 QB</h4>
      <div>
        <div>
          <p> Salary: $7000000.00</p>
          <p> Height: 6-3</p>
          <p> Weight: 230</p>
          <p> TeamName: Kansas City Chiefs</p>
          <p> Age: 23</p>
          <p> Experience: 2nd Season</p>
          <p> College: Texas Tech</p>
          <p> High School: White house HS</p>
        </div>
        <div>
          <img src={MitchT2} alt="MitchT2" class="image-5" />
          <h4 Mitchell Trubisky />
          <h4>#10 QB</h4>
        </div>
        <div>
          <p> Salary: $8000000.00</p>
          <p> Height: 6-3</p>
          <p> Weight: 222</p>
          <p> TeamName:Chicago Bears</p>
          <p> Age: 24</p>
          <p> Experience: 3nd Season</p>
          <p> College: North Carolina</p>
          <p> High School: Mentor HS</p>
        </div>
        <div>
          <img src={RoquanS} alt="RoquanS" class="image-6" />
          <image src={RSmith.jpg} alt="RSmith" class="image-7" />
          <h4 Roquan Smith />
          <h4>#58</h4>
        </div>
        <div>
          <p> Salary: $9000000.00</p>
          <p> Height: 6-1</p>
          <p> Weight: 236</p>
          <p> TeamName:Chicago Bears</p>
          <p> Age: 21</p>
          <p> Experience: 2nd Season</p>
          <p> College: Georgia</p>
          <p> High School: Macon County HS</p>
          <p> Draft Year: 2018</p>
        </div>
      </div>
    </section>
  )
}

export default Homepage
