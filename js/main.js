document.querySelector('#clickMe').addEventListener('click', makeReq)

async function makeReq()
{
  await fetch('/api')
    .then(res => res.json())
    .then(data =>
    {
      console.log(data);
      document.querySelector('#status').textContent = data.status
    })
    .catch(err =>
    {
      console.log(err);
    })
}