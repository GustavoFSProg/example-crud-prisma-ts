import { Router } from 'express'
import ProductContoller from './ProductContoller '
import UserContoller from './UserContoller'

const routes = Router()

routes.get('/', UserContoller.getAll)
routes.get('/find-one', UserContoller.getByName)
routes.post('/register', UserContoller.register)
routes.delete('/delete/:id', UserContoller.deleteOne)
routes.put('/update/:id', UserContoller.update)

// routes.post('/register', ProductContoller.register)
// routes.get('/', ProductContoller.getAll)

export default routes
