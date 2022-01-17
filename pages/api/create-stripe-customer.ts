import initStripe from 'stripe';
import { supabase } from '../../utils/supabase';

const handler = async (req, res) => {
  if (!req.body.record.email || !req.body.record.id) {
    res.status(401).send({
      error: `Email and Id is required only returned: ${req.body.record.email ? `Email: ${req.body.record.email}` : ''}${req.body.record.id ? `Id: ${req.body.record.email}` : ''}`,
    });

    return;
  }

  if (req.query.API_ROUTE_SECRET !== process.env.API_ROUTE_SECRET) {
    console.log('API Route Secret does not match');
    console.log(`API Route Secret: ${req.query.API_ROUTE_SECRET}`);
    res.status(401).send('You are unauthorized to access this api.');
    return;
  }

  const stripe = new initStripe(process.env.STRIPE_SECRET_KEY as string);

  const customer = await stripe.customers.create({
    email: req.body.record.email,
  });

  await supabase
    .from('profile')
    .update({
      stripe_customer: customer.id,
    })
    .eq('id', req.body.record.id);
  res.send({ message: `Stripe customer created ${customer.id}` });
};

export default handler;
