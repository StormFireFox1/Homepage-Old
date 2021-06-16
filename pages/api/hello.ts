// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const helloRoute = (req, res) => {
  res.status(200).json({ name: 'John Doe' });
};

export default helloRoute;