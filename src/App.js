import logo from './logo.svg';
import './App.css';
import {useEffect, useRef, useState} from "react";
import axios from "axios";


function App() {
    const [state, setState] = useState([])
    const [loader, setLoader] = useState(true)
    const [page, setPage] = useState(1)
    const [last, setLast] = useState(null)

    const observer = new IntersectionObserver(
        entries => {
            if (entries[0].isIntersecting) {
                setPage(page + 1)
                setLoader(true)
            }
        }
    )
    const ref = useRef()
    const fetchData = () => {
        axios({
            method: 'GET',
            url: 'https://api.github.com/search/repositories',
            params: {
                q: `javascript`,
                sort: 'stars',
                order: 'desc',
                page: page,
                limit: 120
            }
        })
            .then(res => {
                setState([...state,...res.data.items])
                setLoader(false)
            })
    }
    useEffect(() => {
        setTimeout(() => {
            fetchData()
        }, 1000)
    }, [page])

    useEffect(() => {
        if (last) {
            observer.observe(last)
        }
        return () => {
            if (last) {
                observer.unobserve(last)
            }
        }
    }, [last])

    return (
        <div className="App">
            {loader ? <img className='App-logo' src={logo}/> :
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Url</th>
                        <th>Forks</th>
                        <th>Owner</th>
                    </tr>
                    {state.map(el =>
                        <tr ref={setLast}>
                            <td>
                                {el.name}
                            </td>
                            <td>
                                {el.url}
                            </td>
                            <td>
                                {el.forks}
                            </td>
                            <td>
                                {el.owner.login}
                            </td>
                        </tr>
                    )}

                </table>
            }
        </div>

    );
}

export default App;
