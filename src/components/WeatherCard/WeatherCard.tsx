import Button from "components/Button/Button"
import { Card, Top, Left, Temp, City, Country, Icons, Actions } from "./styles"

interface WeatherCardProps {
  city: string
  country: string
  temp: number
  icons: { icon: string; description: string }[]
  onSave?: () => void
  onDelete?: () => void
  readonly?: boolean
}

function WeatherCard({
  city,
  country,
  temp,
  icons,
  onSave,
  onDelete,
  readonly = false,
}: WeatherCardProps) {
  return (
    <Card>
      <Top>
        <Left>
          <Temp>{temp}°</Temp>
          <City>
            {city}
            <br />
            <Country>{country}</Country>
          </City>
        </Left>
        <Icons>
          {icons.slice(0, 3).map((w, index) => (
            <img
              key={index}
              src={`http://openweathermap.org/img/w/${w.icon}.png`}
              alt={w.description}
              title={w.description}
            />
          ))}
        </Icons>
      </Top>
      {(onSave || onDelete) && (
        <Actions>
          {!readonly && onSave && (
            <Button name="Save" onClick={onSave} size="sm" fullWidth={false} />
          )}
          {onDelete && (
            <Button
              isRed
              name="Delete"
              onClick={onDelete}
              size="sm"
              fullWidth={false}
            />
          )}
        </Actions>
      )}
    </Card>
  )
}

export default WeatherCard
