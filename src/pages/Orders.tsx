import {
	GridComponent,
	ColumnsDirective,
	ColumnDirective,
	Inject,
	Resize,
	Sort,
	ContextMenu,
	Filter,
	Page,
	Edit,
	PdfExport,
} from '@syncfusion/ej2-react-grids'

import { Header } from '../components'
import { ordersData, ordersGrid } from '../data/dummy'
import { Export } from '@syncfusion/ej2-react-charts'

const Orders = () => {
	return (
		<div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
			<Header title='Orders' category='Page' />
			<GridComponent id='GridComponent' dataSource={ordersData} allowPaging>
				<ColumnsDirective>
					{ordersGrid.map((item, idx) => (
						<ColumnDirective key={idx} {...item} />
					))}
				</ColumnsDirective>
				<Inject
					services={[
						Resize,
						Sort,
						ContextMenu,
						Filter,
						Page,
						Export,
						Edit,
						PdfExport,
					]}
				/>
			</GridComponent>
		</div>
	)
}

export default Orders
