import { createEffect, createResource, createSignal } from 'solid-js'
import axios from 'axios';

async function fetchData() {
  const token = 'your-bearer-token';
  const response = await axios.get('https://example.com/api/data', {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
  const data = response.data;
  return data;
}
import './App.css'

function App() {

  const [data] = createResource(fetchData);
  const [count, setCount] = createSignal(0);

  createEffect(() => {
  console.log('data:', data().data);
});


  async function fetchData() {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJEZXZpY2VJZCI6IldlYiIsIlNlc3Npb25JZCI6ImdhdWlvdlVYMjhnWDFabzJPY3ZBMXhuSStCMmJJYlFCS2o2ZDlyRW4wd2s9IiwiVXNlcklkIjoiNzg0MTE2IiwiT2ZmaWNlSWQiOiI2MyIsIlVzZXJuYW1lIjoiamVjb25vbW91QGFybXN0cm9uZ3RyYW5zcG9ydC5jb20iLCJQZXJtaXNzaW9ucyI6IiIsIm5iZiI6MTY5NzgxMDU0MiwiZXhwIjoxNjk3ODUzNzQyLCJpYXQiOjE2OTc4MTA1NDIsImlzcyI6IkFUR0ZyOCIsImF1ZCI6IkFUR0ZyOCJ9.6VmET1Hhq3bxeUhYg45JOHYzKQUy95Pb-B0jmAeMJMM'
  const response = await axios.get('http://localhost:5100/api/shipments/Order?id=1656985', {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
    const data = response.data;
    return data;
  }

  return (
    <>

      <div class="card" onClick={() => setCount(c => c + 1)}>
        wow
        {count()}
      </div>
    </>
  )
}

export default App
