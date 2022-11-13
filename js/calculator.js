let priceBrutto;
let calculated_price;
let cable_price = 0;
let add_cost = 0;
let suggested_price;
let suggested_price_brutto;
let tax_deduction;
let self_deposit;
let suggested_price_brutto_formatted;
let manual_price_change = false;
let newPriceIncrease = 0;
window.addEventListener('DOMContentLoaded', () => {
	user_inputs.forEach((input) => {
		input.addEventListener('change', (el) => {
			main(el);
		});
	});
	calculate_credit.forEach((input) => {
		input.addEventListener('change', (el) => {
			calculateCredit(el);
		});
	});
	calculate_price.addEventListener('click', (el) => {
		el.preventDefault();
		main(el);
	});
	advance.addEventListener('click', (el, element) => {
		el.preventDefault();
		calculateCredit((element = 'advance'));
	});
	suggested_net_price.addEventListener('change', (el) => {
		manual_price_change = true;
		updatePrice(el);
		productionUpdate();
	});
	zero_price.addEventListener('change', (el) => {
		manual_price_change = true;
		if (vat_value.value == 0.08) {
			suggested_net_price.value = parseFloat(
				zero_price.value / 1.08
			).toFixed(2);
		} else {
			suggested_net_price.value = parseFloat(
				zero_price.value / 1.23
			).toFixed(2);
		}
		calculateCredit(el);
		productionUpdate();
	});
});
document.getElementById('tax-select').addEventListener('change', () => {
	if (document.getElementById('tax-select').value == '0.25') {
		document.getElementById('moj-prad').value = 0;
		tax_deduction =
			(suggested_price - document.getElementById('moj-prad').value) *
			document.getElementById('tax-select').value;
	} else {
		tax_deduction =
			(suggested_price_brutto -
				document.getElementById('moj-prad').value) *
			document.getElementById('tax-select').value;
	}
	tax_deduction =
		(suggested_price_brutto - document.getElementById('moj-prad').value) *
		document.getElementById('tax-select').value;
	document.getElementById('kwota-odliczenie').value = Intl.NumberFormat(
		'pl-PL'
	).format(parseFloat(tax_deduction).toFixed(2));
	document.getElementById('finalna-dofinansowanie').value = Intl.NumberFormat(
		'pl-PL'
	).format(
		parseFloat(
			suggested_price_brutto -
				document.getElementById('moj-prad').value -
				tax_deduction
		).toFixed(2)
	);
	productionUpdate();
});
const main = (el) => {
	calculatePower();
	calculatePrice(el);
	productionUpdate();
	document.getElementById('podatek-vat').innerText = `${
		vat_value.value * 100
	}%`;
	document.getElementById('ilosc-faz').innerText = `${inverter_phase.value}`;
	document.getElementById('inverter_manufacturer').innerText =
		inverter_type.options[inverter_type.selectedIndex].text;
	panel_type.options[panel_type.selectedIndex].text == '405Wp Trina Solar'
		? (guarantee.innerText = 'Gwarancja 15/25 lat')
		: (guarantee.innerText = 'Gwarancja 20/30 lat');
	panel_type.value == 345
		? (panel_technology.innerText = 'Monokrystaliczna')
		: (panel_technology.innerText = 'Monokrystaliczna half cut');
	inverter_type.value == 300
		? (inventer_warranty.innerText = 'Gwarancja 10 lat')
		: (inventer_warranty.innerText = 'Gwarancja 12 lat');
	document.getElementById('panel_manufacturer').innerText =
		panel_type.options[panel_type.selectedIndex].getAttribute('data-name');
	document.getElementById('moc-modulu').innerText = panel_type.value;
};
place_of_installation.addEventListener('change', () => {
	if (place_of_installation__pitched_roof.selected == true) {
		roofing.value = 1;
		document.getElementById('btb').style.display = 'block';
		document.getElementById('dachowka').style.display = 'block';
		document.getElementById('ekierka').style.display = 'none';
		document.getElementById('balast').style.display = 'none';
		document.getElementById('grunt').style.display = 'none';
	}
	if (place_of_installation__flat_roof.selected == true) {
		roofing.value = 3;
		document.getElementById('btb').style.display = 'none';
		document.getElementById('dachowka').style.display = 'none';
		document.getElementById('ekierka').style.display = 'block';
		document.getElementById('balast').style.display = 'block';
		document.getElementById('grunt').style.display = 'none';
	}
	if (place_of_installation__ground.selected == true) {
		roofing.value = 4;
		document.getElementById('btb').style.display = 'none';
		document.getElementById('dachowka').style.display = 'none';
		document.getElementById('ekierka').style.display = 'none';
		document.getElementById('balast').style.display = 'none';
		document.getElementById('grunt').style.display = 'block';
		document.getElementById('trina-solar').disabled = true;
// 		document.getElementById('trina-solar2').disabled = true;
		document.getElementById('sun-link').disabled = true;
		document.getElementById('trina-solar3').disabled = false;
		document.getElementById('trina-solar3').selected = true;
	} else {
		document.getElementById('trina-solar').disabled = false;
// 		document.getElementById('trina-solar2').disabled = false;
		document.getElementById('sun-link').disabled = false;
		document.getElementById('trina-solar3').disabled = true;
	}
});

const calculatePower = () => {
	if (proposed_power.value < 2) {
		proposed_power.value = 2;
	}
	const moc_w_kWp = proposed_power.value * 1000;
	const panels_count = Math.ceil(moc_w_kWp / panel_type.value);
	updatePanels(panels_count);
	updatePower();
};
const updatePanels = (amount) => {
	number_of_panels.value = amount;
	document.getElementById('ilosc-modolow').innerText = amount;
};
const updatePower = () => {
	const power = number_of_panels.value * panel_type.value;
	calculated_power.value = parseFloat(power / 1000);

	if (calculated_power.value > 2.25 && calculated_power.value < 3.75) {
		document.getElementById(
			'have_pv_installation_container'
		).style.display = 'grid';
		document.getElementById('have_pv_installation').disabled = false;
	} else {
		document.getElementById(
			'have_pv_installation_container'
		).style.display = 'none';
		document.getElementById('have_pv_installation').disabled = true;
	}
	document.getElementById('moc-instalacji').innerText = parseFloat(
		power / 1000
	).toFixed(2);
	document.getElementById('energy-given').value =
		parseFloat(
			((100 - document.getElementById('autoconsumption').value) / 100) *
				calculated_power.value
		).toFixed(2) * 1000;
	const srednia_produkcja = parseFloat(power / 1000).toFixed(2) * 1050;
	document.getElementById('prognoza').innerText =
		parseFloat(srednia_produkcja).toFixed(2) + ' kWh';
	document.getElementById('rocznie-wartosc').innerText =
		parseFloat(srednia_produkcja).toFixed(2) + ' kWh';
	document.getElementById('styczen-wartosc').innerText =
		parseFloat(srednia_produkcja * 0.0305).toFixed(2) + ' kWh';
	document.getElementById('luty-wartosc').innerText =
		parseFloat(srednia_produkcja * 0.0474).toFixed(2) + ' kWh';
	document.getElementById('marzec-wartosc').innerText =
		parseFloat(srednia_produkcja * 0.081).toFixed(2) + ' kWh';
	document.getElementById('kwiecien-wartosc').innerText =
		parseFloat(srednia_produkcja * 0.1057).toFixed(2) + ' kWh';
	document.getElementById('maj-wartosc').innerText =
		parseFloat(srednia_produkcja * 0.1426).toFixed(2) + ' kWh';
	document.getElementById('czerwiec-wartosc').innerText =
		parseFloat(srednia_produkcja * 0.1349).toFixed(2) + ' kWh';
	document.getElementById('lipiec-wartosc').innerText =
		parseFloat(srednia_produkcja * 0.1414).toFixed(2) + ' kWh';
	document.getElementById('sierpien-wartosc').innerText =
		parseFloat(srednia_produkcja * 0.1269).toFixed(2) + ' kWh';
	document.getElementById('wrzesien-wartosc').innerText =
		parseFloat(srednia_produkcja * 0.0843).toFixed(2) + ' kWh';
	document.getElementById('pazdziernik-wartosc').innerText =
		parseFloat(srednia_produkcja * 0.0526).toFixed(2) + ' kWh';
	document.getElementById('listopad-wartosc').innerText =
		parseFloat(srednia_produkcja * 0.029).toFixed(2) + ' kWh';
	document.getElementById('grudzien-wartosc').innerText =
		parseFloat(srednia_produkcja * 0.0237).toFixed(2) + ' kWh';
};
const calculatePrice = (el) => {
	if (calculated_power.value > 3.75) {
		document.getElementById('faza-1').style.display = 'none';
		inverter_phase.value = 3;
	} else {
		document.getElementById('faza-1').style.display = 'block';
	}
	if (
		calculated_power.value < 3 &&
		document.getElementById('have_pv_installation').value === 'Nie'
	) {
		document.getElementById('faza-3').style.display = 'none';
		inverter_phase.value = 1;
	} else {
		document.getElementById('faza-3').style.display = 'block';
	}
	calculated_price = nettoCalculation();
	// calculated_price = parseFloat(calculated_price * discount.value).toFixed(2);
	if (isNaN(parseFloat(additional_costs.value))) {
		add_cost = 0;
	} else {
		add_cost = parseFloat(additional_costs.value);
	}
	newPriceIncrease = 1400;
	cable_price = getCableCost();
	trench_price = getTrenchCost();
	lift_price = getLiftCost();
	const large_inverter = document.getElementById('large_inverter');
	let custom_cost = 0;
	if (document.getElementById('have_pv_installation').value === 'Tak') {
		custom_cost += 1500;
	}
	calculated_price =
		parseFloat(calculated_price) +
		parseFloat(cable_price) +
		parseFloat(add_cost) +
		parseFloat(trench_price) +
		parseFloat(lift_price) +
		parseFloat(inverter_type.value) +
		parseFloat(large_inverter.value) +
		parseFloat(custom_cost) +
		parseFloat(newPriceIncrease);
	if (
		number_of_panels.value % 2 != 0 &&
		place_of_installation__ground.selected == true
	) {
		alert('Instalacja na gruncie musi mieć parzystą ilość paneli');
		calculated_price = 0;
	}

	if (
		place_of_installation__ground.selected == true &&
		cable_length.value == ''
	) {
		alert('Podaj długość przewodu, aby obliczyć cenę!');
		calculated_price = 0;
	}
	if (document.getElementById('client-name').value == '') {
		alert('Podaj dane klienta');
		calculated_price = 0;
	}
	if (document.getElementById('trina-solar').selected == true) {
		calculated_price =
			parseFloat(calculated_price) +
			parseFloat(number_of_panels.value) * 40;
	}
	updatePrice(el);
};
const updatePrice = (el) => {
	suggested_price = suggestPrice();
	suggested_price = parseFloat(suggested_price * discount.value).toFixed(2);
	const large_inverter = document.getElementById('large_inverter');
	let custom_cost = 0;
	if (document.getElementById('have_pv_installation').value === 'Tak') {
		custom_cost += 1500;
	}
	suggested_price =
		parseFloat(suggested_price) +
		parseFloat(add_cost) +
		parseFloat(cable_price) +
		parseFloat(trench_price) +
		parseFloat(lift_price) +
		parseFloat(inverter_type.value) +
		parseFloat(large_inverter.value) +
		parseFloat(custom_cost) +
		parseFloat(newPriceIncrease);
	if (document.getElementById('trina-solar').selected == true) {
		suggested_price =
			parseFloat(suggested_price) +
			parseFloat(number_of_panels.value) * 60;
	}
	if (
		place_of_installation__ground.selected == true ||
		(place_of_installation__flat_roof.selected == true &&
			document.getElementById('balast').selected == true)
	) {
		suggested_price += Math.ceil(calculated_power.value / 10) * 2000;
	}
	suggested_price_brutto =
		parseFloat(suggested_price) +
		parseFloat(suggested_price) * parseFloat(vat_value.value);
	priceBrutto =
		parseFloat(calculated_price) +
		parseFloat(calculated_price) * parseFloat(vat_value.value);
	if (
		place_of_installation__ground.selected == true ||
		place_of_installation__flat_roof.selected == true
	) {
		trench_length.disabled = false;
		trench_length.placeholder = 'Wpisz ilość, aby zobaczyć sugerowaną cenę';
	} else {
		trench_length.disabled = true;
		trench_length.placeholder = '';
	}

	brutto_formatted = Intl.NumberFormat('pl-PL').format(
		parseFloat(priceBrutto).toFixed(2)
	);

	if (
		place_of_installation__ground.selected == true &&
		number_of_panels.value % 2 != 0
	) {
		suggested_price = 0.0;
		suggested_price_brutto = 0.0;
	}

	if (
		place_of_installation__ground.selected == true &&
		cable_length.value == ''
	) {
		suggested_price = 0.0;
		suggested_price_brutto = 0.0;
	}

	if (document.getElementById('client-name').value == '') {
		suggested_price = 0.0;
		suggested_price_brutto = 0.0;
	}

	if (manual_price_change) {
		manual_price_change = false;
		suggested_price = suggested_net_price.value;
		suggested_price_brutto =
			parseFloat(suggested_price) +
			parseFloat(suggested_price) * parseFloat(vat_value.value);
	} else {
		suggested_net_price.value = parseFloat(suggested_price).toFixed(2);
		suggested_net_price.min = parseFloat(suggested_price).toFixed(2);
	}

	const suggest_price_formatted = Intl.NumberFormat('pl-PL').format(
		parseFloat(suggested_price).toFixed(2)
	);
	zero_price.value = parseFloat(suggested_price_brutto).toFixed(2);
	zero_price.min = parseFloat(suggested_price_brutto).toFixed(2);
	const date = new Date();
	const day = date.getDate();
	const month = date.getMonth() + 1;
	const year = date.getFullYear();
	document.getElementById('suma-netto').innerText =
		suggest_price_formatted + ' zł';
	document.getElementById('suma-brutto').innerText =
		Intl.NumberFormat('pl-PL').format(
			parseFloat(suggested_price_brutto).toFixed(2)
		) + ' zł';
	document.getElementById('generated_id').value = `XX[DDMMRR]/${
		office_level.value
	}${parseFloat(calculated_price).toFixed(0)}/${day}-${month}-${year}`;
	document.getElementById('dofinansowanie-start').value = Intl.NumberFormat(
		'pl-PL'
	).format(parseFloat(suggested_price_brutto).toFixed(2));
	calculateCredit(el);
};
const calculateCredit = (el) => {
	if (
		document.getElementById('repayment_period').value > 150 &&
		document.getElementById('in-bank').selected
	) {
		document.getElementById('repayment_period').value = 150;
	}
	if (
		document.getElementById('repayment_period').value > 120 &&
		document.getElementById('bnp-paribas').selected
	) {
		document.getElementById('repayment_period').value = 120;
	}
	if (
		document.getElementById('repayment_period').value > 96 &&
		document.getElementById('tf-bank').selected
	) {
		document.getElementById('repayment_period').value = 96;
	}
	if (
		document.getElementById('repayment_period').value > 96 &&
		document.getElementById('tf-bank').selected
	) {
		document.getElementById('interest').value =
			document.getElementById('in-bank').value;
	}
	if (document.getElementById('repayment_period').value > 120) {
		document.getElementById('interest').value =
			document.getElementById('in-bank').value;
		document.getElementById('in-bank').value = 0.652;
		document.getElementById('in-bank').innerText = '0.652 (max 150 msc)';
	}
	if (document.getElementById('repayment_period').value <= 120) {
		document.getElementById('in-bank').value = 0.72;
		document.getElementById('in-bank').innerText = '0.72 (max 150 msc)';
	}
	if (
		document.getElementById('interest').value ==
		document.getElementById('bnp-paribas').value
	) {
		document.getElementById('logo-bank').src =
			'../img/BNP_Paribas_logo.png';
		document.getElementById('repayment_period').max = 120;
		document.getElementById('deferment').value = 'Nie';
		document.getElementById('deferment').disabled = true;
	} else if (
		document.getElementById('interest').value ==
		document.getElementById('in-bank').value
	) {
		document.getElementById('logo-bank').src = '../img/in-bank-logo.png';
		document.getElementById('repayment_period').max = 150;
		document.getElementById('deferment').disabled = false;
	} else if (
		document.getElementById('interest').value ==
		document.getElementById('tf-bank').value
	) {
		document.getElementById('logo-bank').src = '../img/TF-Bank-logo.png';
		document.getElementById('repayment_period').max = 96;
		document.getElementById('deferment').value = 'Nie';
		document.getElementById('deferment').disabled = true;
	}
	const credit_time = document.getElementById('repayment_period').value;
	if (document.getElementById('tax-select').value == '0.25') {
		tax_deduction =
			(suggested_price - document.getElementById('moj-prad').value) *
			document.getElementById('tax-select').value;
	} else {
		tax_deduction =
			(suggested_price_brutto -
				document.getElementById('moj-prad').value) *
			document.getElementById('tax-select').value;
	}
	let result = '';
	if (el == 'advance') {
		let moj_prad_value = parseFloat(
			document.getElementById('moj-prad').value
		);
		let odliczenie_value = parseFloat(tax_deduction);
		let automatic_self_deposit = parseFloat(
			moj_prad_value + odliczenie_value
		).toFixed(2);
		document.getElementById('self_deposit').value = parseFloat(
			automatic_self_deposit
		);
	}
	self_deposit = document.getElementById('self_deposit').value;
	const amount_of_credit = suggested_price_brutto - self_deposit;
	const rK = amount_of_credit / credit_time;
	const rO =
		(document.getElementById('interest').options[
			document.getElementById('interest').selectedIndex
		].value /
			100) *
		amount_of_credit;
	const rata = rK + rO;
	for (let i = 0; i < credit_time; i++) {
		if (i >= 1 && document.getElementById('tf-bank').selected) {
			result += `<div class="tr"><div class="td">${
				i + 1
			}</div><div class="td">Zmienna</div></div>`;
		} else if (
			i >= 1 &&
			document.getElementById('in-bank').selected &&
			credit_time > 120
		) {
			result += `<div class="tr"><div class="td">${
				i + 1
			}</div><div class="td">Zmienna</div></div>`;
		} else {
			result += `<div class="tr"><div class="td">${
				i + 1
			}</div><div class="td">${Intl.NumberFormat('pl-PL').format(
				parseFloat(rata).toFixed(2)
			)} zł</div></div>`;
		}
	}
	document.getElementById('kwota-kredytu').value = Intl.NumberFormat(
		'pl-PL'
	).format(parseFloat(amount_of_credit).toFixed(2));
	document.getElementById('wynik-kredyt').innerHTML = result;
	document.getElementById('kwota-odliczenie').value = Intl.NumberFormat(
		'pl-PL'
	).format(parseFloat(tax_deduction).toFixed(2));
	document.getElementById('finalna-dofinansowanie').value = Intl.NumberFormat(
		'pl-PL'
	).format(
		parseFloat(
			suggested_price_brutto -
				document.getElementById('moj-prad').value -
				tax_deduction
		).toFixed(2)
	);
};
const getCableCost = () => {
	if (!isNaN(parseFloat(cable_length.value))) {
		if (calculated_power.value < 10) {
			return cable_length.value > 0
				? Math.floor(parseFloat(cable_length.value) * 20)
				: 0;
		}
		return cable_length.value > 0
			? Math.floor(parseFloat(cable_length.value) * 30)
			: 0;
	}
	return 0;
};
getTrenchCost = () => {
	if (!isNaN(parseFloat(trench_length.value))) {
		return trench_length.value > 0
			? Math.floor(parseFloat(trench_length.value) * 18)
			: 0;
	}
	return 0;
};
const getLiftCost = () => {
	if (calculated_power.value < 5) {
		return lift.value;
	}
	if (calculated_power.value < 10) {
		return lift.value * 2;
	}
	if (calculated_power.value < 20) {
		return lift.value * 3;
	}
	if (calculated_power.value < 30) {
		return lift.value * 3.5;
	}
	if (calculated_power.value > 30) {
		return lift.value * 4;
	}
};
const productionUpdate = () => {
	let productionSum = 0;
	const priceChange = parseFloat(
		document.getElementById('wzrost-cen').value / 100
	);
	let savedSum = 0;
	let energyCost = parseFloat(document.querySelector('#current-price').value);
	let energySell = parseFloat(document.querySelector('#sell-price').value);
	let energyNeed = parseFloat(document.querySelector('#energy-need').value);
	const progressBar = [
		...document.querySelectorAll('.subsidy__progress_bar'),
	];
	const progressText = [...document.querySelectorAll('.refund_amount')];
	const finalPrice = parseFloat(
		suggested_price_brutto -
			document.getElementById('moj-prad').value -
			tax_deduction
	).toFixed(2);
	let res = '';
	const years = 20;
	progressBar[0].value = finalPrice;
	progressText[0].innerText =
		Intl.NumberFormat('pl-PL').format(parseFloat(finalPrice).toFixed(2)) +
		' zł';
	for (let year = 1; year <= years; year++) {
		const production = calculated_power.value * (100 - (year - 1) / 2) * 10;
		productionSum += production;
		const autoconsumption =
			production *
			(document.getElementById('autoconsumption').value / 100);
		const energySold = production - autoconsumption;
		const energySoldValue = parseFloat(energySold * energySell);
		const energyBought =
			energyNeed - autoconsumption > 0
				? parseFloat(energyNeed - autoconsumption)
				: 0;
		const energyBoughtValue = parseFloat(-1 * (energyBought * energyCost));
		const priceNoPV = energyNeed * energyCost;
		const savedMoney =
			parseFloat(energySoldValue) +
			parseFloat(energyBoughtValue) +
			parseFloat(priceNoPV);
		savedSum += savedMoney;
		energySell = energySell * (1 + priceChange);
		energyCost = energyCost * (1 + priceChange);
		res += '<div class="tr">';
		res += `<div class="td">${year}</div>`;
		res += `<div class="td">${Intl.NumberFormat('pl-PL').format(
			parseFloat(savedMoney).toFixed(2)
		)}zł</div>`;
		res += `<div class="td">${Intl.NumberFormat('pl-PL').format(
			parseFloat(savedSum).toFixed(2)
		)}zł</div>`;
		res += `<div class="td ${
			savedSum - finalPrice < 0
				? 'price-less'
				: savedSum - finalPrice > 0
				? 'price-more'
				: 'neutral'
		}">${Intl.NumberFormat('pl-PL').format(
			parseFloat(savedSum - finalPrice).toFixed(2)
		)}zł</div>`;
		res += '</div>';
		progressBar[year].value = savedSum;
		progressText[year].innerText =
			Intl.NumberFormat('pl-PL').format(parseFloat(savedSum).toFixed(2)) +
			' zł';
		if (savedSum > finalPrice) {
			progressBar[year].classList.add('more');
		} else {
			progressBar[year].classList.remove('more');
		}
	}
	document.getElementById('saved-money').innerHTML = `${Intl.NumberFormat(
		'pl-PL'
	).format(parseFloat(savedSum - finalPrice).toFixed(2))}zł`;
	document.getElementById('wynik-inwestycji').innerHTML = res;
	progressBar.forEach((bar) => {
		const highest =
			savedSum > suggested_price_brutto
				? savedSum
				: suggested_price_brutto;
		bar.max = highest;
	});
};
