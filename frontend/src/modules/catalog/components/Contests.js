import { FormattedMessage, FormattedDate } from "react-intl";
import { Badge } from "react-bootstrap";

const Contests = ({contests}) =>{

    const tipoLabel = (estado) =>{
        switch(estado){
            case "ABIERTO" : return "success"
            case "VOTACION": return "warning"
            case "FINALIZADO" : return "danger"
            default : return "success"
        }
    }

    return(
            <table className="table table-striped table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">
                            <FormattedMessage id="app.ContestTable.Photo"/>
                        </th>
                        <th scope="col">
                            <FormattedMessage id="app.ContestTable.Name"/>
                        </th>
                        <th scope="col">
                            <FormattedMessage id="app.ContestTable.Status"/>
                        </th>
                        <th scope="col">
                            <FormattedMessage id="app.ContestTable.InitialDate"/>
                        </th>
                        <th scope="col">
                            <FormattedMessage id="app.ContestTable.EndDate"/>
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {contests.map(concurso => 
                        <tr key={concurso.idConcurso}>
                            <td><img src={`data:image/jpeg;base64, /9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgMDAwMDAwMDAwP/2wBDAQEBAQEBAQEBAQECAgECAgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwP/wAARCAGQAZADAREAAhEBAxEB/8QAHgABAAEEAwEBAAAAAAAAAAAAAAoBBggJAgUHAwT/xABXEAABAgQDAwMNCgwDBgcBAAABAAIDBAURBgcSCCExCRNBFBkiOFFSV2GBkZKW1RgyVXF2d7G20dQVIyQzQlNzobS1t9IWYqIXRIKTwfAmJzZHcqXxwv/EABgBAQEBAQEAAAAAAAAAAAAAAAABAwIE/8QAIxEBAAEEAQUBAQEBAAAAAAAAAAECERJRMRMyYXGBIUJBA//aAAwDAQACEQMRAD8AkQICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICCuk9w+YoK6Hngx3on7EDQ/vXeifsQU0u7h8xQfhmqpSZFz2ztTp0iYYJiNnJ+VlzCHDVFMeNDLWAoLdmswMASdxOY/wRIuEMRXCbxbh2W7AGzorOfqTfxQHdtvQW/M53ZKSQa6azhyva1+p0MDH2FHOewXuSYFWimGW2PEb+4EFqTe1Ps2SGjqrPPLKFzr3MZbEsCZILbg6upGxgCPGbILWm9tnZNkwdWfeAoxa8seyWmKnNRmuHEPhQabZrN3YuDnB10FrznKB7IskHuObslMta9rCJChYjnHFzwdDmCHS/zYsdXHoQW5N8pPsiyoic3jnEs7EZuDJPL7FkSFFNv93jRKbBY/z7juQW1OcqHsty+oS0fMSoDm7gy+DIkEud+rhGenpVoiHo1WAPGyC2ZvlXdnmAS2Xwdm1Ou0EhzKPheXYHgjSxzo+LGvDni/6PQgteZ5WzKVpaJPK3MaPq1X6rnsMyWnvR+Jm5/cSgtiZ5XnCzWN6iyKxHHfzpa4TmO6XJfi99n2hYbng0kC9rkILbneV6myHGn5DysL8YNAncdxplwgbrBzJbD0s98YEi7wNNuhBas5yu2YJETqDJfA8I86BBbPV/Ekc2G8ticx1FYEHo37kFvTfK053RzE6kyzyvp5c0c2P/ABPONabE3vNVdoO+24lBl5sN7Z2aG0pmJjHCmPaThKnSFBwXCxFIHDdNnJSL1U2uyVNjMmZiPOTRiseydbZrRYW49KDZ2gICAgICAgICAgICAgICAgICAgICAg8V2g86qXs+ZXVnNGr0GoYkk6RUKFT30mmRpaVmYkSt1aVpktHM1NtfAhw4EWYuQW+VBrhnOV1wy0O/B2Rtfj9gSwTuN6ZKAzF9zSyBQZ9sOE7jrBJXWMz+2FsTXK9T7tIksg5CELERBN5gx5prn6TZ5EDCci4tDugJjVoWtNcrjmK7SJHJzA0HTqu6cr2IJskbw0N5hsh2VuJ//Uxq0LamOVnz2i3bLZc5TSILy5sQwMWzsTT0Q3iNiFrGnuuDCmNWhbk3yp+0tH5zqWn5ZU27yWmHhaanAxl7iC0TdUjc8wDdqdYnpTGrQtec5TXa0muc5nEmBpCG8ANbJ5e0YR4Q6eYix+dLfHv3hMatC2pvlE9rycc9xzLlJMuhCHan4Uw3AADb6Xt1yT/xrtRvZMatC2Zrbs2upoC+eWKZYaCwtk6fhiXY/Vx1sFDjRNbP0HNewtCY1aFrTW19tRTrobpjPTMImEHBvN1aDLF+o37IyUlLDUb7yXA+NMatC2ZjaM2gZsAzGd2axLSYjWQ8d4olQ0n31hI1aA03vwtZdU0zE/sIt6czazWnw9s7mfmLP6nCL+VY5xRG1xTu1v5+pm7gN3StBbM7iXEtQ5xs/iKvz5iWMVk7WqjNOe6wAMZ8abeSbDdfosg6cxph4JMeYiAnSSY0WJcjfY9k6+4KTaP2R+c6Ihs7S823h5DjYeJxuOKmVOxwbAgXAbAh7720wm23cd4ba6ZU7HMMYPewwOn82Re/cOkajc9CZU7HMb+HxW4cPEbJlTsO7bfpte2+19w4XTKnYHcLncOi+4nxNB3uPxJlTscDEhjjEYN9t7mjf3N5G9MqdjgZiAAXGNCAHG72j6TdMqdjk2LDcQGva64u3SQ4OHdaRcOG7o6Uyp2P0MhRYn5uDFfvsNMJ7ru7wWbvf/lG/wASZU7H75aiVudbrkqLV5xmsQ9UpTJ6ZbrJsG3gwHi90yp2Lmlsr8zZ3V1Flxj+d0locZTBmJJoAvIDeygU2IDqJ3HpKZU7FqVOl1OiVCbpNZp0/SKrT475afplUk5mn1CSmIZtEgTclNw4MzLxmdLXtBViYngbJ+SjmhB2isWS7udJnco69AY24ELXCxTg6c1xbEEhkKXOm11jPMqkIqAgICAgICAgICAgICAgICAgICAgICDCnlD5fqnZCzUYXljGRMFzb3AariSxxh6Y0mwLg0sDrkcEEY/yW8Q3gfF4ltT2wjspGi1up6PwbRKzUREDnMMhSp6ba9sN2iI5r4EB7H82/cQCSp1I0WXVKZV5oVBrHU/LfHs8IrtMLqTCGIY5iW4kc3TnAAW6UzjRZdEps67QE/oMnkhm3MMe8w2xYeXeLOZ5wAEsMY0kQgQHDi7pTONFlyyuyPtOzmrmMisxxofzZEzh+PInVe3+/OlrC54m1ulM40WXPK7C+1xN84IWR2JmmGGOPVFUwnKAh5DRYzeIYFyCd44hTqRosuaU5PDa6mi0OyvgyOpgcDP4twpCGo3tCJgVaZ/HOtuAvdXqRosueU5Mva0m3sY7DmB5Euhl5/CGPabC5oi94cUQJWaLYgtvG+yZxosuWS5LDacmDC6tn8raaHA8852MJidEu69mNIlaOTHD+6zcOlM40WXNJ8k1nrMBnVmYWVdNLn6X64+IprmGm9ojhApTTFG7cGi5vwTqRosueV5IvMjhPZy5ewzqAd1JQcVzLXNtve1syySLXdwEEHujgmcaLLjluSHqx1dW57U6G3dobJ4Hmo46L84JmuQL7+FkzjRZc8tyQ2H2l3VmfVcjBwbulcu6bKvDgWkl0WLi2cMQG3SApNcTExYXPLckjlcywnc28wZgaLOMrScNSJLgNxAiwJ+wJ8ZWarmlOSgyAhcw6dxzm5PPY20ZgqmE5SA9x4lrIGFOcAt3XoLokuS42YJZsMTL8x6jzZcT1Ti6HB50H3jHdRUyV5sQt1i2xNuhBccryaWyNLtZz2DsVTsVjxED5nH+Jw1xB4PhwJyDDLSOO5Bc8tye+yJLf+08OZu7V+XYlxNOaDxOgxaqffnjw4BBckvsPbJEsSW5C4ImOxDfy4VebIAbpu10Wpl7XHiTdBdErsn7M0ifyPIjLWENDWF0TD0vMEtaLBuiY51vAcSST03QXXJ5D5IU50MyWTuVsLm2ljHOwFhmOWtNrt0zdOmWOG4dAPj7oXJKZbZayAYJHLjL+SbDDubElgrDUqIZcSbsbBprALk3QXBKUSiSOkSVGpElzbucYZOlyEtpi2sIjGwYEMQ323ahvsg7W4sRazSdRaAy5de9w/R2O/xIOQe87zEcNJ4BoJLNLg5hcC09kO4L7tyCKntoywldqrPOGC9xi46nZxzogLXF0/KSc6bA9lo/KOxuSdNt61o4+pL3HkvppsttSy8uXlrqjl/jOXa0XIiugwJSoaCRuaGtlL3O64ss6uZVI3UBAQEBAQEBAQEBAQEBAQEBAQEBBUAutpY599Qda5awtva5aHG7ugWCBoi/qn+g/wDsQYobcsk+a2S88GlgDoOFYE4OcZENxJVeRmi1nYACITDBB8RQRZhuuN24m9uF7nUR4iVtT2wiTNybtRmJzZEwA2HF1Mk61jOSZ1M5xDGy9deWsishjQ1wD7cALLFWct5jvY3G43Rex7unsd10FLRiSTDe4ncCWxexHcbZo3XN/Kg4aIt76ItxwNom4dz3m8Dx3QV0Rex/FvIYdTWmG4tB6Tp5uxJQVtGu482+7r37B/A9A7DsR8VkFNEW1ubiWHDdFBHiDg0OA8qCnNxLEGE8g91sQ+a7Tp8lkFdMU3vCcdVrkw3XIHAXEMGyAWxSbmG//luH7xDBPluUDRF/VP8AQf8A2IGiL+qf6D/7EDRF/VP9B/8AYgaIv6p/oP8A7EDRF/VP9B/9iBoi/qn+g/8AsQNEX9U/0H/2IGiL+qf6D/7EDRF/VP8AQf8A2IGiL+qf6D/7EDRF/VP9B/8AYgaIv6p/oP8A7EDTE6YbgOkkPaPKebNkFN/Y2abghzXBwsS1rySLtHY6b+WyCL7t+y5ltrvORmvnBEqOGJsODNA/LsC4XnSBx1aXTBBPSVrRwkrn5NycbKbXWA4T4/NQ57DmYEm5gAPP87hOpxYUN/SB1VDB3WWdXMqktqAgICAgICAgICAgICAgICAgICAgj3coFnNm7g3aoxxQMI5n48wxQpWgZfxZaj0LE9VplNl4s9g+lzc5EhScrMw4LHzUzEdEiEC7nuJO8qxzAwx90btBeG7NP12r33xbY06R1lZzyzqxJSZ+hYgzYzDrlEqsAytTpNUxXWJ6nVCWLrul5yUjzL4MxBL272uBFwmMaHllj3D5iqPSMMZxZuYKpEPD+DszMd4WoUKYmpuFR6BiWq0qmw5qdiCNOTDJOUmIUFsaaijVEda7jvKmNOh33ujNoPw25qeute++JjToPdGbQfhtzU9da998TGnQe6M2g/Dbmp661774mNOg90ZtB+G3NT11r33xMadB7ozaD8NuanrrXvviY06D3Rm0H4bc1PXWvffExp0HujNoPw25qeute++JjToPdGbQfhtzU9da998TGnQe6M2g/Dbmp661774mNOg90ZtB+G3NT11r33xMadB7ozaD8NuanrrXvviY06D3Rm0H4bc1PXWvffExp0HujNoPw25qeute++JjToPdGbQfhtzU9da998TGnQe6M2g/Dbmp661774mNOg90ZtB+G3NT11r33xMadB7ozaD8NuanrrXvviY06D3Rm0H4bc1PXWvffExp0HujNoPw25qeute++JjToPdGbQfhtzU9da998TGnQodo7aBBsc7s0weNjjau33bzu6s7iY06A7R20FY/+d2afc/9bV7gdx/3zpC5qiIpm0CTJsr1eq4g2a8iq9XqjP1qs1fLjDlQq9WqM3Fm6nUp6PLuiRpqcnI7nxpmYjuadTnElyyVof5SCVfLbWmOXvcxxnKFgiaBYACA3DMjJBsS3GI3qPf08FrR2/UlbvJ/TRldrvKB3Oth89P1yRu8Xa9s5hyrMMK2/e76SuJibz+Kk/LkEBAQEBAQEBAQEBAQEBAQEBAQEEaTlJu2+zA+TmW31HpCscx7GNGSmU1azyzNwzlZh2pUqkVnFJq7ZKo1sTRpks6kUOp16L1SJOWm5kiNL0t8NulhIc4HoW0zEcoz+HJNZz7rZjZXkaRvL8WF17uBuf8AD7bt3XG6+83Uzp2K9aazo8I2V/p4r9gpnTsOtNZ0eEbK/wBPFfsFM6dh1prOjwjZX+niv2CmdOw601nR4Rsr/TxX7BTOnYdaazo8I2V/p4r9gpnTsOtNZ0eEbK/08V+wUzp2HWms6PCNlf6eK/YKZ07DrTWdHhGyv9PFfsFM6dh1prOjwjZX+niv2CmdOw601nR4Rsr/AE8V+wUzp2HWms6PCNlf6eK/YKZ07DrTWdHhGyv9PFfsFM6dh1prOjwjZX+niv2CmdOw601nR4Rsr/TxX7BTOnYdaazo8I2V/p4r9gpnTsOtNZ0eEbK/08V+wUzp2HWms6PCNlf6eK/YKZ07DrTWdHhGyv8ATxX7BTOnYdaazo8I2V/p4r9gpnTsOtNZ0eEbK/08V+wUzp2HWms6PCNlf6eK/YKZ07DrTWdHhGyv9PFfsFM6djxfaA2BcytnrLWezQxPjPBNao8jWaBQn06gmu/hB01iCaiSUtMNE/SZOXdCgOYdQMQXBTOnYwTKV9siV5sfdqps9/NXhniLjfKPad3fAO3dwrFWlXlQpTqXaojv0NYJ7LXBM8HD9Npj16T5yM7pikyZBJ4gBa0dqS8P2KJoye1lkBEGnTMY/lJaK95DWNZMyNUgGzju1FtrdJK6niRKlWCiAgICAgICAgICAgICAgICAgICCNJyk3bfZgfJzLb6j0hWOY9jpOT07cHJ/wDa42/pzi9aV8fUhJzZw8g+lyyVzQEBAQEBAQEBAQEBAQEBAQEBAQEBAQYA8p12omIfnCyy/n0dBG2K2r7ZRK72P+1U2evmrwx/DFYq098q1JiDtF4WnjD0mfypobOdvvitptcr+pgG8N5sxrcDfV4lrRwksQdl2aEhtJZFzfv+bzNw3754a38bOcxxsQ1zOe8d7rueJEtB4s947jnDzErzq4oCAgICAgICAgICAgICAgICAgII0nKTdt9mB8nMtvqPSFY5j2Ok5PTtwcn/ANrjb+nOL1pXx9SEnNnDyD6XLJXNAQEBAQEBAQEBAQEBAQEBAQEBAQEBBgDynXaiYh+cLLL+fR0EbYravtlErvY/7VTZ6+avDH8MVirVBytsmIOb+VE6WOHVuW1TY2IXEte6RxK+H2LfegQeqhqH6WoX4LWjhJa8skpsSOdGT82Q60LNHAQAaTq1x8UU2X7Ei5ABiNuOFge6up4kS/pgWjxx3I0QeZ7lgr4oCAgE2ZF3XJYGt8TnxGMB/wBSAgICAgICAgICAgICAgICCNJyk3bfZgfJzLb6j0hWOY9jpOT07cHJ/wDa42/pzi9aV8fUhJzZw8g+lyyVzQEBAQEBAQEBAQEBAQEBAQEBAQEBAQYA8p12omIfnCyy/n0dBG2K2r7ZRK72P+1U2evmrwx/DFYq1j8rxKN/xhkXUS17i3CONJDgSy4rUhNhve6nXvbebBa0TERyjVRgGY6ix7gOcNx1FjfCM5dh7JvU2IqbHLmEb9Y5vdbfddf5ImOOeYh5wNNoji/W6+ogw4TmteN+l45zeFgqiAgIK6i0HsrBzSHeMDs7ediCiAgICAgICAgICAgICAgII0nKTdt9mB8nMtvqPSFY5j2Ok5PTtwcn/wBrjb+nOL1pXx9SEnNnDyD6XLJXNAQEBAQEFL7wN1yR0gcSG9JBPZOAsLnegrv4EEWJBvxBBsWkcQ4HoKAgICAgICAgICAgICAgIMAeU67UTEPzhZZfz6OgjbFbV9sold7H/aqbPXzV4Y/hisVa7eV5lWczkJOmIbumsbyPNlu4HmqNGDtW++6IdyDTHTZkyVRp06XmEZOoSM4YgFzDMtNQo5iAXFyzm7+RbR2/ETNJc6oEu/3xfLy73RN933hNGoi3YuIaCR3CFir7ICAgWaS1ztwhkvv3Bpcx3+h5QEBAQEBAQEBAQEBAQEBAQRpOUm7b7MD5OZbfUekKxzHsdJyenbg5P/tcbf05xetK+PqQk5s4eQfS5ZK5oCAgICBuFyTYAXNhqNhvIa0by4jgO6gwJ2+dqFuQmW7sKYWnmQs08xZSbkKCYb2PmcK0EtMtVMWxmB7TCjDneYkCffxnl43QyuqacrjzHk7trt+aVDg5LZj1Z8zmThell2FqrUJnVOY3w1I6mOgxYsUmJOYmoMBg50kl85LFsUdk2IpMWmw2icN1wbbri9jbpF99ioCAgICAgICAgICAgICDAHlOu1ExD84WWX8+joI2xW1fbKJXex/2qmz181eGP4YrFWCfK7S7n4EyNmQWNbL41xjAeS38aWzdApDwWOtbRCMobg7+yQaLn35t97NOh177wOxPEdIC2jt+ImX4ZmzUMM4bn+ebH6vw9RZ18ZosIjo9LkYgPcAc1993cWKu6QEBBUC9v8rob/8AlxWRP/5QUQEBAQEBAQEBAQEBAQEBBGk5SbtvswPk5lt9R6QrHMex0nJ6duDk/wDtcbf05xetK+PqQk5s4eQfS5ZK5oCAgICCwc0cy8K5PYExHmLjOc6koWGqdEnorWua2PUJlx5mn0qRv7+oVWdiMgQBe2t4J3AoIo+c2bWKM88yMSZm4ve1tUxDNXlqdCe98nQqLLEwqRQqcH/m5OmSoEO/GLF1xTviFaf8/wDUlZOHcSV3CFeo2KcM1Wbo2IcP1KXqtGqsm8CPT52Tu+FHA1NEVrnaWRIUQ6YsFxabtJC7xi95gSh9k3aYom0vlrAxAzqan46oPUtMzAw3DfZ9OqxYS2sScN5EWPQsQQxzss8DTDfzkNx1QxqwnmVZSoCAgICAgICAgICAgIMAeU67UTEPzhZZfz6OgjbFbV9sold7H/aqbPXzV4Y/hisVYc8rPKGJkrltPfi9Mnma+C7XxHVuHJ/cDcENcJXfbub0GgmJcMeDx0uufHY/Gtv5+ImDZRzn4Qyoyvnw6G5s7lzgeaJhfmnvmcLUiOIsHcDzLmk6fL4lir0JAQEFCLj31tJa+3fc29sT/Rp1f8KCqAgICAgICAgICAgICAgII0nKTdt9mB8nMtvqPSFY5j2Ok5PTtwcn/wBrjb+nOL1pXx9SEnNnDyD6XLJXNAQEBAA1bgeJ031BoBNx74kNFiON9yCOjyh21Gc58wW5cYNn3Oyyy6nY8GLGln/kmLMZQdUnUK2XAaZmmUzS6VkT+laLFG95WlNMxP7CNc60BB7RkDnji3Z5zMo+YuFY8SMyAeocTUMxSySxThyZe01OjTrCRpcWN5yUjDfLTTWvClXEiVHlpmPhPNrA2Hsw8E1AVHDeJ5MzcnEcYbY8lMQ7NnqXPQgR1HUaXMXgR4JF9bdXBwJwVff0jiOkdIu3iLg7r8UBAQEHVVyuUbDNIn6/iKqSFEolKlzNVKrVSZhSdPkZZsSHCMaamozmwoTOcitG87yUHaBzXBrmvY9r4bIrXQ3tiNdCiND2RQ5hcDCexwcHcC0g8CEFUBAQEBAQYA8p12omIfnCyy/n0dBG2K2r7ZRK72P+1U2evmrwx/DFYqxf5VSTEzs2UKMIbC+RzawrG547osODHw/jGUiMgk2F4j4rAd/SEEeN4uxw43a4fHcHy71vHb8RLh2cprq3Z+yQmS0B7sqMAwTpIc3TK4ap8qDqaS0/mLW4rBXs6AgIKENNi61man+UQ3/v3oKoCAgICAgICAgICAgICAgjScpN232YHycy2+o9IVjmPY6Tk9O3Byf/AGuNv6c4vWlfH1ISc2cPIPpcslc0BAQDuAO7e4NDbgOJJ/RuQDpbckmwCDW1yim1G/J/Av8AsqwbUTCzHzHpkwJyYlHt6swngiPeTqFVDob/AMkqVdcwy0o73zIWuP8AotKRzAjugAC2kX3AEOcBYarO03ILruItw7IniSvQiqAgqDYg2vY8O78duj6VJ/YmBnfsMbWcxs742fhnFc5NRMosbzstDxFDY57mYWrLrSsnjKTlmBwa1gcyFPw27osu1rjd0ME5TTMft1SUJePLzUGFNSkeDNSk3DZNys3LRoUeVm5Wbb1TKzUpGhOeyJKTEvFa6G4EgtII3LkfZAQVaHOc1jWue5xsAwXP7yAT4uJQaDuUl2qYeYGIImQmBqg2NgzCFQD8ez8tE5yVxRi2UILKI2Kx+iYomGIvvwLsjz13H8wxdRTeL3HuXJy7YT8QylN2d8zqu+LX6fAMHKzEFSjl0Sr0yVhazgmdnYtjEqtNl2a6e6IS+PLjmWgli5n8/Bt+3d0X1aQN+rhckjiG96eDt++4sgICAgICDAHlOu1ExD84WWX8+joI2xW1fbKJXex/2qmz181eGP4YrFXgXKcyYmtleqxjDMX8HY8wNN6r2EDnJ+YkA69xvd1b0II4Nri1ySRa54ndxPjK2jt+Ilb7Hsz1bst5FTAaGN/2eUiEId9Wl0pFm6e5wd/nMofiCxVkggICBusbjfYlrv1bhvET/h/6oCAgICAgICAgICAgICAgII0nKTdt9mB8nMtvqPSFY5j2Ok5PTtwcn/2uNv6c4vWlfH1ISc2cPIPpcslc0BAQeTZ35v4WyKyzxNmXi8siU+iSzYVPpgdpnMQ16aLhRsPSLQC6JMVKbYATvbDhB732a0oIpWZOYmKc1sc4kzCxlOmexFieoxKhORAXCBJssWSVPkId9ECQpkqGwYMMAMDGXIuXX0iiLRKLHWgICAgoRceOx0mwIBLS25BBaRYkWIspMXi0jdLybu10134N2cMxaoQ8DmMp65PRQATd8R+A5qNEfYXJ1UpziL3dL33QgcqoiJiyt0ZFiR4zwIdYdAJG4kDiRuvw3LkcSbC9gbb7EkA26C4BxaD0mxtxsUGAu3xtTDIPLs4SwnOsbmvmDKTUnQ+Zc0x8K0BxfJ1DF0ZrwWwZp93S9Pa7eZhznWIh7+qaYqvcRtXEue97ojor4j3xYkZ5c50Z8Rxc6M57y6JFfFJ1Oe4lzySSblaxFosj9MlPT1MnJOo02cmafUafNS09Tp+UmIktNSE7KR+qZWblZiGdcCYlpjs2PALmncOxJaeZoj9kSWNiLa0ldpDBH4GxNMQYGb2DZOBAxNKuMGCcT0oOZLymLqXBD7c1MkQ2TkuwkQJnsvexGuOSs5O7a1rm2+7gNws9tuxcCCgICAgIMAeU67UTEPzhZZfz6OgjbFbV9sold7H/AGqmz181eGP4YrFXlXKNSzZrZEzIOl7nyNUwFOMa0iwc3G9BhGI/dcw4cCLEuN28jf0EIzQ3W3l1uk8TbpPxrb+fiJR2wdNdVbIWRvFxlcN1SSiPdvc6JLYor7WuDhu5sMfa3dWKsuEBAQVAN9Q4MD3u/wDi1jr/AL0FEBAQEBAQEBAQEBAQEBAQRpOUm7b7MD5OZbfUekKxzHsdJyenbg5P/tcbf05xetK+PqQk5s4eQfS5ZK5oCDhEiw4MKJGiRIUKHDhvivjRnNbChMhtc98WK9xDWwGQ2uL3Hc1oLuhBGn28Np920Fmc+gYanXOyry7mp2mYYZCe8S+JKrqMCs4ui9lZ/VnNdTyWoEslQXAjnXX0oiJj9hGCnn8oAPlA3XWgICAgICD7y0xMSkzLTcpMR5WckpiFNyM1LxHQo8nNy0RsxBmIERha9keHGhsexwILXsFuJUtE8wJKOwztYS+0RgU4bxTNQIWbuCZOXhYhgPIgRMU0SEOp5fGUnDDgx0Z8QtZUIY/NTLtR1Ncsau6VZQZw5sYUyTy6xFmRjCPzVKoEpzstJQorWT1dqzzFhUyg0xkV14tSq86Axtzoht7I2DVBFMzZzRxXnRmDiTMrGczz1axHOc8JWG97pGj05gAp9CpbXkltNpMqGQmWsHODn21OK0o5lJedkkm5JJ7pWgogvjLXMfFmUWNqBmFgaoupmI8OzYmZR4P5LOwH2ZOUqpQSRDm6XU5e8KPCducw7rODSOKojH8gSntnzPrCO0TltSsf4XfDlZpx6gxRhx8dsSewtiOFDa+epM00gRHy5cTFlY53R5dwO5zXNbkr3Dhu/wC+79CAgICDAHlOu1ExD84WWX8+joI2xW1fbKJXex/2qmz181eGP4YrFVobeco2c2Sc5mOL28xQ6TNEsvqIk8TUaaPAX0tDCT3ALoIuhFtxtu3buHktcWW0dsekSaeTpmjN7IuWvZxD1DOYspzg5zuxdAxFOxOaaDe0FvO6gOAc6/SsVZuoCAgoQHWb+k5zeb/aNIcz97UFUBAQEBAQEBAQEBAQEBAQRpOUm7b7MD5OZbfUekKxzHsdJyenbg5P/tcbf05xetK+PqQk5s4eQfS5ZK5oKtvqbpFzqbYFxbqNxZoLQSSTuA6Tu6UGqjlJtqc4Cwy7IXA1Ta3GWMpERsezss+0xhvBcyAINJhxIZa+FVcWOY8u3tMKTaTuMQXsRM8DQa1uhrWA3a1rWtAFmtaAA1rW/oho6N+/xLWmJiP1HJdAgICAgICC/cscysW5QY7w7mJgafNNxHhqeZOS0Rz4hlp6AWmHOUmpQGHTNUypQXGHFhuuACHDsmhZVU1TMzEDJLbE2vaxtQVvDUvIU2ewtl/hiQlZmTwvMzcOYjTWLZyQhtrtcqESAeZmWS0Zz5WRv2UOWGojVEeTaaZiYmRhgtAQEFR0jdvBAuXBtz3xaHOt8SDJPZb2kcT7NOZcriymdU1HClW5il48wxDiaYddobY92zMvCcTBh4gpAcY8pGsC94MJ1w+y4riarWEo3B2L8N49wtQcZ4RqsvWsN4lp0Cq0ipyrg6FMysyCQHAXMCYgvBhxYb7PhxWuaQCLLOYtNpVcv/f/AH0qAgIMAeU67UTEPzhZZfz6OgjbFbV9sold7H/aqbPXzV4Y/hisVfn2yJUzmyrn6zWGiBlvXJwfizEN5VkOPZoAvc82EEU2/SBu4gcB3QFt/PxEkPkxZkzWyXQIbonORKfjzMGXI7xj6tLxYTD0e8fuWKtgaAgIB7nQdzvi4/SEBAQEBAQEBAQEBAQEBAQEEaTlJu2+zA+TmW31HpCscx7HScnp24OT/wC1xt/TnF60r4+pCTmzh5B9Llkrmg8M2i89sO7O2VVdzGrohTk9BBpmE8OuiNZM4lxNOQyKbTYcNxaWS8O/PTTzYQoA46nAKxF5iBFRxji7EWPsVV/GeLqnErGJcS1Scq9YqMR7nmYm5yM7VzYe9xhy0BkJsKCwdjDgw2tHAk6004ze6LaXQICAgICAgICAgICAgIKEXtvtY3PjFiLDvSb8R2Q6CEGxbYG2u4mRuKm5bY6qUVmUWMKjDEKZja4kHAmKI5ZCl63DGp2mjVOJE0VCG2wYXNjBt7lcTReb3Ei9j2RYbI0KLCjwYzGRYUeHF56HGgxLc3HhxwCyYhxbgtiNJbEa9rgTc2yVyQEGAPKddqJiH5wssv59HQRtitq+2USu9j/tVNnr5q8MfwxWKrh2lJV1Q2ec75Buj8oyuxe20UhsN2mmxIl3u36QNFuHSgiQwna2Q3H9JrCejiAejgtv5+IkRcldNvj7NNVlnRIbuoMzsTwgyHbVDbMy1NmxzluJIiD6VirZOgICAgICAgICAgICAgICAgICAgjScpN232YHycy2+o9IVjmPY6Tk9O3Byf8A2uNv6c4vWlfH1ISc2cPIPpcslfGcnJSnSk3UKhNwJCnyErMT09PTcWHAlJGTk4T481NzUaJ2MOBBhMu5x4IIv+2htNTe0fmtMTdLjzEDLbCJmaJgCmxHPZDmpYRH/hHFEzLWDGVDEcaBrAdcw5VsNm4ldU90DEO5tbo1Fx/zONhc92wG7uLZFEBAQEBAQEBAQEBAQEBAQcS1rgQ9jXgtc0h4uC13EW7l9/xoN3XJy7YgqkGm7OuZ9XJq0tDMtlXiOoRnP6ukmN5xuBqhNRbBs/JQ2PdTXPJ1wjzJJdoA888yrceRYkEEEOcACQHdiGte18OxILX9INjdBRBgDynXaiYh+cLLL+fR0EbfyX8V7fv42/etq+2USe9lvNbLDDOy5kHJYizHwLQ52SyswzCnJWr4roVMmJWPDl4giwZqBOTsOJAmGC2uG4Bzdx6VirsM39pfZvn8ssx6BCzvyvqNSq2BcV0mTkZHFlJq75idnqFPslJRsOlRZ4RY0ebYxoZuLSQTa4QRboGpsCDcEPEKHcE3IdoF7k2vvW0dsekb/uSYmhFyOzIlRotJZrxAxwP42JDm8IYemS+JDG5recvY9KxVtOQEBAQEBAQEBAQEBAQEBAQEBAQRpOUm7b7MD5OZbfUekKxzHsdJyenbg5P/ALXG39OcXrSvj6kJObSBa+643eRxv5rjzrJWnvlNNqX8EyETZwwNUD+EqtKSs7mpPyrxqkKRFtHp+DWR2O/FTNXDmTE+0kOZLiHCt+NcraZ/waQOj/8AfF3d/QFtaNIKggICAgICAgICAgICAgICAg/RKzU3JTUtOSM1MSU7JzMGck5yUivgTUpOS0VsxLzUtGhkRIUxAjsD2OG8OAK5qj8m0CShsNbWsttE4H/w1iyahQM3cEyUvBr8BzYUv/iyjQxDgSuMadCYQ10SLdsOoQ2j8VMEPADIgDcpiY5hWd3TbpsDbxG9j5bKDAHlOu1ExD84WWX8+joI269COOhmou0N1HcXaRqPxm1zwS0aHL/pvHiS0aAcQAAeFm8Ae4PiSeJG9PkjJknLvOKSDGhkPG9Cmw8O1ajM4fbAt8X5Fu+K3QvOrbmgICAgICAgICAgICAgICAgICAgjScpN232YHycy2+o9IVjmPY6Tk9CBtg5P3IA57GwueAvlzi+3nK0r4SG+Dao2iKLs3ZT1LGMZ0tN4sqnOUbANDixQ11WxBFgxHtmo0FwLvwXQ4T+qZo6SSAIXF4C4imZ4VFmrddq+Ja1V8Q4jqE3V63XKjP1asVKajuiTU/UqhGfHjzM3Ec6JzrmRXmzQQwAAN3WWsRaIhHUKggICAgICAgICAgICAgICAgIHlt4yC4D4wHNJHlCC9cu8wsV5U40w/j/AAPVY1GxJhyegzMjGhl7oEeA4c1O0mpMa9hnqRUoMR8GNBfcOhv7oC5qi8WgSmNnDP3Cu0blpS8eYbMKUqDHMpmMMNujsiTeF8TQ4TXT0jH1aYkaRjvPOysexa+C4DcWkDKYmnlWPPKcm+yJiEjpzByyPnrsci1txFjx4Ho3KCNyASbDjYnzAnz7lvM2i6PmYjBe72tsbbzbshxbv/SA3nxFc5wWfaWhRZxxbJwY024G2mVhPmXG/CzYDYjjf4rpnBZc0ngTHdSLW07AuN5/WQGmRwhiObadTxDBD5emRGAa3AXvbx2Sa4/SzddyVODsbYPpmdULFuD8T4XgVGbwLHpkxiKjVCjNqj4MHFEvONk4U/BgOiGVEGGYhAtaI3eb7slbb0BAQEBAQEBAQEBAQEBAQEBAQEEaTlJu2+zA+TmW31HpCscx7Fn7CNbpGGtqXLjEWIKjKUeiUKRzEqtVqs9EbClKfISWWGM401NRojiAGQoLSbcXcOlaV9qQt3aw2iqttKZr1DF0R01LYQo7ZihZfUWPrh/g3DcOZiHquYhEkfhavRfyqZf74OexnCGAp/z4kljN+7hw3Dh0DoC0BAQEBAQEBAQEBAQEBAQEBAQEBBQi4sf+oseIIt0g7x40GRezFtF4l2a8ypLGFJMao4cnhApuOcLGY0wMQYeMVznNhMeDDhVamuc+NIxR2TXtLL6XBczTFVrjctygONMM5j7DEXHODqrL1nDGJMYZX1OkVCA9jjFhOrkYRIU21thKTcpHJhzEM9nCitLbbwVlMWmYVHf3dIuOkd0dPxLWvtlEoTZEy0y3j7NOQ9cj5fYIj1uo5Z4bnJ+sRsKUKLU56ciy5dGmpyeiSDpmYjxXAEuc4ncsVZYy9Gosozm5Si0eWhi1mQKXIQg0N96GmHLtc3T8aDtYcR0FuiC58Bti0tgOMFukv5xzQIWggF4QcXvfEIdEe+IRuBiPfEIFmiw1udb3vR3Sg4oCAgICAgICAgICAgICAgICAgII0nKTdt9mB8nMtvqPSFY5j2MFmvewuLHvYXw4sF+hzm64MeE+BHgv0ka4UeDEcx7Tdr2OIIIJC2mInlHHpJ3kk3JJJJJ3km/STx7qRERwCoICAgICAgICAgICAgICAgICAgICCtzwv3f9Vg7zhov8SD1alZyYvp2T2McjTHbPYGxXiDDuLmSczEcH4fxDh6o9UunqO112w2VuXe+FMw90NzmNi7nNupjToeTlSvtkSu9j/tVNnr5q8MfwxWKsjEBAQEBAQEBAQEBAQEBAQEBAQEBAQEEaTlJu2+zA+TmW31HpCscx7GCi3QQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBBQrmvtkSu9j/tVNnr5q8MfwxWKsjEBAQEBAQEBAQEBAQEBAQEBAQEBAQEGmPbH2HM+s8doPFmY+ApTB0fDNYo+DpOTfVsVwqbUOeoeGadS57npHqGO+E0TUA6ST2QVj8mJGMHWwdqr4Py99dx7IXfU8JY62DtVfB+XvruPZCdTwWOtg7VXwfl767j2QnU8FjrYO1V8H5e+u49kJ1PBY62DtVfB+XvruPZCdTwWOtg7VXwfl767j2QnU8FjrYO1V8H5e+u49kJ1PBY62DtVfB+XvruPZCdTwWOtg7VXwfl767j2QnU8FjrYO1V8H5e+u49kJ1PBY62DtVfB+XvruPZCdTwWOtg7VXwfl767j2QnU8FjrYO1V8H5e+u49kJ1PBY62DtVfB+XvruPZCdTwWOtg7VXwfl767j2QnU8FjrYO1V8H5e+u49kJ1PBY62DtVfB+XvruPZCdTwWOtg7VXwfl767j2QnU8FjrYO1V8H5e+u49kJ1PBY62DtVfB+XvruPZCdTwWOtg7VXwfl767j2QnU8FjrYO1V8H5e+u49kJ1PBY62DtVfB+XvruPZCdTwWOtg7VXwfl767j2QnU8FjrYO1V8H5e+u49kJ1PBZQ8mDtV9FOy9J6AMbt3/wD1Kk13i1lb3dn3BNdy1yLyly+xOyVh4kwZgei4erkORmROSUOpSEEsmGSs2GQxNQQ47nhoBXA9fQEBAQEBAQEBAQEBAQEBAQEBAQEBAQUt5LWsNxANt5Gq+9x3k93hZBW7u/d5x9iBd3fu84+xAu7v3ecfYgXd37vOPsQLu793nH2IF3d+7zj7EC7u/d5x9iBd3fu84+xAu7v3ecfYgXd37vOPsQLu793nH2IF3d+7zj7EC7u/d5x9iBd3fu84+xAu7v3ecfYgXd37vOPsQLu793nH2IF3d+7zj7EC7u/d5x9iBd3fu84+xAu7v3ecfYgXd37vOPsQLu793nH2IF3d+7zj7EC7u/d5x9iBvO4ucR8fm4DoKB8QsLkgDgBus0dxrej4ygICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIP/9k=
`} width="128" height="128"/></td>
                            <td>{concurso.nombre}</td>
                            <td><Badge variant={tipoLabel(concurso.estadoConcurso)}>{concurso.estadoConcurso}</Badge></td>
                            <td><FormattedDate value={new Date(concurso.fechaInicio)}/></td>
                            <td><FormattedDate value={new Date(concurso.fechaFin)}/></td>
                        </tr>
                    )}
                </tbody>

            </table>
    );
}

export default Contests;