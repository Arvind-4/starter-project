import datetime
from django.http import JsonResponse


def index(request):
    return JsonResponse({'foo': 'bar'})

def current_datetime(request):
    return JsonResponse({
        "now": datetime.datetime.now().isoformat()
    })
