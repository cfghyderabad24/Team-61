const {Router} = require('express')

const adminApp = Router();

adminApp.use((req,res,next)=>{
    // console.log("This is Admin");
    //use the db here from req.app.body
    next();
})

const products = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' },
    { id: 4, name: 'Product 4' },
    { id: 5, name: 'Product 5' },
    { id: 6, name: 'Product 6' },
    { id: 7, name: 'Product 7' },
    { id: 8, name: 'Product 8' },
  ];
  
  // Dummy data for purchases
  const purchases = [
    { productId: 1, userId: 101, organization: 'Org A', date: '2024-01-01', quantity: 10 },
    { productId: 1, userId: 102, organization: 'Org B', date: '2024-02-15', quantity: 20 },
    { productId: 1, userId: 103, organization: 'Org A', date: '2024-03-10', quantity: 5 },
    { productId: 2, userId: 104, organization: 'Org C', date: '2024-04-05', quantity: 15 },
    { productId: 2, userId: 105, organization: 'Org A', date: '2024-05-21', quantity: 8 },
    { productId: 2, userId: 106, organization: 'Org D', date: '2024-06-11', quantity: 22 },
    { productId: 3, userId: 107, organization: 'Org B', date: '2024-01-19', quantity: 12 },
    { productId: 3, userId: 108, organization: 'Org C', date: '2024-02-17', quantity: 30 },
    { productId: 3, userId: 109, organization: 'Org D', date: '2024-03-28', quantity: 40 },
    { productId: 4, userId: 110, organization: 'Org A', date: '2024-04-15', quantity: 20 },
    { productId: 4, userId: 111, organization: 'Org B', date: '2024-05-12', quantity: 15 },
    { productId: 4, userId: 112, organization: 'Org C', date: '2024-06-14', quantity: 25 },
    { productId: 5, userId: 113, organization: 'Org D', date: '2024-01-20', quantity: 30 },
    { productId: 5, userId: 114, organization: 'Org A', date: '2024-02-22', quantity: 10 },
    { productId: 5, userId: 115, organization: 'Org B', date: '2024-03-30', quantity: 40 },
    { productId: 6, userId: 116, organization: 'Org C', date: '2024-04-10', quantity: 25 },
    { productId: 6, userId: 117, organization: 'Org D', date: '2024-05-15', quantity: 35 },
    { productId: 6, userId: 118, organization: 'Org A', date: '2024-06-16', quantity: 15 },
    { productId: 7, userId: 119, organization: 'Org B', date: '2024-01-25', quantity: 10 },
    { productId: 7, userId: 120, organization: 'Org C', date: '2024-02-18', quantity: 5 },
    { productId: 7, userId: 121, organization: 'Org D', date: '2024-03-21', quantity: 20 },
    { productId: 8, userId: 122, organization: 'Org A', date: '2024-04-25', quantity: 25 },
    { productId: 8, userId: 123, organization: 'Org B', date: '2024-05-30', quantity: 30 },
    { productId: 8, userId: 124, organization: 'Org C', date: '2024-06-05', quantity: 40 },
  ];
  21  ``

adminApp.get('/users-by-product/:pid', (req, res) => {
const pid = parseInt(req.params.pid);
const users = purchases.filter(purchase => purchase.pid === pid).map(purchase => purchase.userId);
const uniqueUsers = [...new Set(users)].length;
res.json({ pid, uniqueUsers });
});


adminApp.get('/total-sales-by-product/:pid', (req, res) => {
    const pid = parseInt(req.params.pid);
    const salesByMonth = purchases
      .filter(purchase => purchase.pid === pid)
      .reduce((acc, purchase) => {
        const month = new Date(purchase.date).toLocaleString('default', { month: 'short' });
        acc[month] = (acc[month] || 0) + purchase.quantity;
        return acc;
      }, {});
  
    const salesData = Object.keys(salesByMonth).map(month => ({ month, sales: salesByMonth[month] }));
    res.json({ pid, salesData });
  });

  adminApp.get('/total-sales-by-product', (req, res) => {
    const salesByProduct = products.map(product => {
      const totalSales = purchases
        .filter(purchase => purchase.productId === product.id)
        .reduce((acc, purchase) => acc + purchase.quantity, 0);
  
      return { productId: product.id, totalSales };
    });
    res.json(salesByProduct);
  });
  


module.exports = adminApp;