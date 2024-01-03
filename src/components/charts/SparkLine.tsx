import {
	Inject,
	SparklineComponent,
	SparklineTooltip,
} from '@syncfusion/ej2-react-charts'

type TSparkLineProps = {
	currentColor: string
	id: string
	type: string
	height: string
	width: string
	color: string
	data: {
		x: number
		y: number
	}[]
}

const SparkLine = ({
	currentColor,
	id,
	type,
	height,
	width,
	color,
	data,
}: TSparkLineProps) => {
	return (
		<SparklineComponent
			id={id}
			height={height}
			width={width}
			lineWidth={1}
			valueType='Numeric'
			fill={color}
			border={{ color: currentColor, width: 2 }}
			dataSource={data}
			xName='x'
			yName='y'
			type={type}
			tooltipSettings={{
				visible: true,
				format: '${x} : data: ${y}',
				trackLineSettings: { visible: true },
			}}
		>
			<Inject services={[SparklineTooltip]} />
		</SparklineComponent>
	)
}

export default SparkLine
