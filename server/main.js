function test(v) {
	switch (v) {
		case 1: {
			console.log('case 1');
			const data = 5;

			// if statement seems to be required
			if (data === 123) {
				const ok = [].some(function() {
					return !!data;
				});

				// return seems to be required
				if (!ok) return 2;
			}

			break;
		}

		case 2: {
			console.log('case 2');
			break;
		}
	}
}

test(1);
