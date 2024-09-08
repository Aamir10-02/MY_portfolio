# from django.core.mail import send_mail
# from django.conf import settings
# from django.http import JsonResponse
# from django.views.decorators.csrf import csrf_exempt
# from rest_framework.parsers import JSONParser
# from .models import Form
# from .serializers import FormSerializer
# import json

# @csrf_exempt
# def formApi(request, id=0):
#     if request.method == 'GET':
#         try:
#             if id:
#                 form = Form.objects.get(id=id)
#                 form_serializer = FormSerializer(form)
#                 return JsonResponse(form_serializer.data, safe=False)
#             else:
#                 forms = Form.objects.all()
#                 forms_serializer = FormSerializer(forms, many=True)
#                 return JsonResponse(forms_serializer.data, safe=False)
#         except Form.DoesNotExist:
#             return JsonResponse({'error': 'Form not found'}, status=404)
    
#     elif request.method == 'POST':
#         form_data = JSONParser().parse(request)
#         form_serializer = FormSerializer(data=form_data)
#         if form_serializer.is_valid():
#             form_serializer.save()
#             return JsonResponse({'message': 'Added Successfully'}, status=201)
#         return JsonResponse(form_serializer.errors, status=400)
    
#     elif request.method == 'PUT':
#         form_data = JSONParser().parse(request)
#         try:
#             form = Form.objects.get(id=id)
#             form_serializer = FormSerializer(form, data=form_data)
#             if form_serializer.is_valid():
#                 form_serializer.save()
#                 return JsonResponse({'message': 'Updated Successfully'}, status=200)
#             return JsonResponse(form_serializer.errors, status=400)
#         except Form.DoesNotExist:
#             return JsonResponse({'error': 'Form not found'}, status=404)
    
#     elif request.method == 'DELETE':
#         try:
#             form = Form.objects.get(id=id)
#             form.delete()
#             return JsonResponse({'message': 'Deleted Successfully'}, status=204)
#         except Form.DoesNotExist:
#             return JsonResponse({'error': 'Form not found'}, status=404)

# @csrf_exempt
# def form_submission_view(request):
#     if request.method == 'POST':
#         try:
#             data = json.loads(request.body)
#             name = data.get('name')
#             email = data.get('email')
#             subject = data.get('subject')
#             message = data.get('message')

#             # Debug prints
#             print(f"Name: {name}, Email: {email}, Subject: {subject}, Message: {message}")

#             # Validate form data
#             if not name:
#                 return JsonResponse({'error': 'Name is required'}, status=400)
#             if not email:
#                 return JsonResponse({'error': 'Email is required'}, status=400)
#             if not subject:
#                 return JsonResponse({'error': 'Subject is required'}, status=400)
#             if not message:
#                 return JsonResponse({'error': 'Message is required'}, status=400)

#             # Save to database
#             Form.objects.create(name=name, email=email, subject=subject, message=message)

#             # Send email
#             send_mail(
#                 'New Form Submission',
#                 f'You have a new form submission:\n\nName: {name}\nEmail: {email}\nSubject: {subject}\nMessage: {message}',
#                 settings.EMAIL_HOST_USER,  # From email
#                 [settings.EMAIL_HOST_USER],  # To email
#                 fail_silently=False,
#             )

#             return JsonResponse({'message': 'Form submitted successfully!'})
#         except Exception as e:
#             print(f"Error: {e}")
#             return JsonResponse({'error': 'Invalid data'}, status=400)
#     else:
#         return JsonResponse({'error': 'Invalid request method'}, status=405) 

from django.core.mail import send_mail
from django.conf import settings
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from .models import Form
from .serializers import FormSerializer
import json
# form/views.py

from django.http import HttpResponse

def home(request):
    return HttpResponse("Welcome to the home page!")

@csrf_exempt
def formApi(request, id=0):
    if request.method == 'GET':
        try:
            if id:
                form = Form.objects.get(id=id)
                form_serializer = FormSerializer(form)
                return JsonResponse(form_serializer.data, safe=False)
            else:
                forms = Form.objects.all()
                forms_serializer = FormSerializer(forms, many=True)
                return JsonResponse(forms_serializer.data, safe=False)
        except Form.DoesNotExist:
            return JsonResponse({'error': 'Form not found'}, status=404)
    
    elif request.method == 'POST':
        form_data = JSONParser().parse(request)
        form_serializer = FormSerializer(data=form_data)
        if form_serializer.is_valid():
            form_serializer.save()
            return JsonResponse({'message': 'Added Successfully'}, status=201)
        return JsonResponse(form_serializer.errors, status=400)
    
    elif request.method == 'PUT':
        form_data = JSONParser().parse(request)
        try:
            form = Form.objects.get(id=id)
            form_serializer = FormSerializer(form, data=form_data)
            if form_serializer.is_valid():
                form_serializer.save()
                return JsonResponse({'message': 'Updated Successfully'}, status=200)
            return JsonResponse(form_serializer.errors, status=400)
        except Form.DoesNotExist:
            return JsonResponse({'error': 'Form not found'}, status=404)
    
    elif request.method == 'DELETE':
        try:
            form = Form.objects.get(id=id)
            form.delete()
            return JsonResponse({'message': 'Deleted Successfully'}, status=204)
        except Form.DoesNotExist:
            return JsonResponse({'error': 'Form not found'}, status=404)

@csrf_exempt
def form_submission_view(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            name = data.get('name')
            email = data.get('email')
            subject = data.get('subject')
            message = data.get('message')

            # Debug prints
            print(f"Name: {name}, Email: {email}, Subject: {subject}, Message: {message}")

            # Validate form data
            if not name:
                return JsonResponse({'error': 'Name is required'}, status=400)
            if not email:
                return JsonResponse({'error': 'Email is required'}, status=400)
            if not subject:
                return JsonResponse({'error': 'Subject is required'}, status=400)
            if not message:
                return JsonResponse({'error': 'Message is required'}, status=400)

            # Save to database
            Form.objects.create(name=name, email=email, subject=subject, message=message)

            # Send email
            send_mail(
                'New Form Submission',
                f'You have a new form submission:\n\nName: {name}\nEmail: {email}\nSubject: {subject}\nMessage: {message}',
                settings.EMAIL_HOST_USER,  # From email
                [settings.EMAIL_HOST_USER],  # To email
                fail_silently=False,
            )

            return JsonResponse({'message': 'Form submitted successfully!'})
        except Exception as e:
            print(f"Error: {e}")
            return JsonResponse({'error': 'Invalid data'}, status=400)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405) 