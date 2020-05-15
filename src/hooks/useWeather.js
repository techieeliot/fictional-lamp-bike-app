    
    const watch = false
    const {latitude, longitude } =  usePosition(watch, {enableHighAccuracy: true, maximumAge: 300});
    const [ weather, setWeather ] = useState([])
    
    const firstRender = useRef(true)

    useEffect( () => {
        if (firstRender.current) {
            firstRender.current = false
            return
        } else 
        if (latitude && longitude) {
            axios.get('http://localhost:9036', {
                params: {
                    lat: latitude, 
                    lon: longitude
                }
            })
            .then(response => response.data)
            .then(data => setWeather(data))
            // .then(data => setData(data.data))
            // .then(data => setToday(data.data[0]))
            .catch(err => console.log(err));
        }
    }, [latitude, longitude])