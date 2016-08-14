/** @jsx createElement */
import { createElement } from 'elliptical'
import { Command, String } from 'lacona-phrases'
import { openURL } from 'lacona-api'

export const StockChecker = {
    extends: [Command],

    execute (result) {
        const urlString = 'https://new.tradingview.com/chart/?symbol=' + result.ticker
        openURL({ url: urlString })
    },

    describe () {
        return (
            <sequence>
                <literal text='stock ' />
                <String argument='ticker' id='ticker' />

            </sequence>
        )
    }
}

export const extensions = [StockChecker]
